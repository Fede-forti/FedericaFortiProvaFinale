import React, { useEffect } from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import { API_CARRELLO } from '../api/api'

interface IProp {
    token: string
}

export interface IProdCart {
    idCarrello: number,
    idProdotto: number,
    prodotto: string,
    quantita: number,
    prezzo: number,
    tokenCliente: string
  }
  

const Cart = (props:IProp) => {

    const {token} = props
    const [cart, setCart] = React.useState<IProdCart[]>([])
    const [total, setTotal] = React.useState<number>(0)
    

    useEffect(() => {
        axios
        .get(API_CARRELLO, {
            headers: {
                'Authorization' : `Bearer ${token}`}
        })
        .then((res) => {
            setCart(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const updateQuantity = (index:number, quantity:number) => {
        const newCart = [...cart];
        newCart[index].quantita = quantity;
        setCart(newCart);
        console.log(newCart[index])
    }

    const handleRemove = (index:number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    useEffect(() => {
        let total = 0;
        cart.forEach((item:IProdCart) => {
            total += item.prezzo * item.quantita
            console.log(cart)
         
        })
        setTotal(total)
    }, [cart])



    
  return (
    <>
        <h1>Il tuo carrello</h1>
        <div className='d-flex flex-wrap justify-content-evenly'>
        {cart.map((item:IProdCart, index:number) => {
            return (
                <CartItem key={index} 
                          product={item}
                            index={index}
                            updateQuantity={updateQuantity}
                            handleRemove={handleRemove}/>
            )
        })}
        </div>
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
            <h2>Totale Ordine: {total}</h2>
        </div>
    </>
  )
}

export default Cart