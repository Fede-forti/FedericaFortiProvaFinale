import axios from 'axios'
import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { API_CARRELLO, API_LOGIN, API_PRODOTTI } from '../api/api'

export interface IProduct {
  productId: number,
  productName: string,
  categoryId: number,
  unitPrice: number,
  unitsInStock: number
}

const Component2 = () => {

  const [json, setJson] = React.useState<IProduct[]>([])
  const [search, setSearch] = React.useState<IProduct[]>([])
  const [token, setToken] = React.useState<string>('')

useEffect(() => {

  axios
    .get(API_LOGIN, {
      headers: {
        'Authorization' : 'Basic forti.federica96@gmail.com:Fede123'}
    })
    .then((res) => {
      localStorage.setItem('token', res.data)
        setToken(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])

useEffect(() => {
  axios
    .get(API_PRODOTTI)
    .then((res) => {
      setJson(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])


 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()


  if(e.target.value.length >=  3) {

    setSearch(json.filter((item:IProduct) => {
      return item.productName.toLowerCase().includes(e.target.value.toLowerCase()) && item.unitsInStock > 0
    }))
    
  }
 }

 const handleAddtoCart = (product:IProduct) => {

  const toSend = {
    idCarrello: 0,
    idProdotto: product.productId,
    prodotto: product.productName,
    quantita: 1,
    prezzo: product.unitPrice,
    tokenCliente: token[0]
  }
  console.log(toSend)


  axios
    .post(API_CARRELLO, toSend, {
            headers: {
            Authorization: `Bearer ${token[0]}}`
        }})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1>Ricerca Prodotti</h1>
      <form>
        <label>Nome: </label>
        <input type="text" onChange={(e) => handleSearch(e)} /><br/><br/>
      </form>
      <div className="d-flex flex-wrap justify-content-evenly">
      {search.map((product:IProduct) => {
        return <ProductCard key={product.productId} product={product} handleAddtoCart={handleAddtoCart} />
      })}
      </div>
    </div>
  )
}

export default Component2