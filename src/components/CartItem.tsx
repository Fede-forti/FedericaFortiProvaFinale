import React, { useEffect } from 'react'
import { IProdCart } from './Cart'
import { Button, Card } from 'react-bootstrap'

interface IProp {
    product: IProdCart
    index: number
    updateQuantity: (index:number, quantity:number) => void
    handleRemove: (index:number) => void
}

const CartItem = (props:IProp) => {

    const {product, index, updateQuantity, handleRemove} = props
    const [quantity, setQuantity] = React.useState<number>(1)

    useEffect(() => {
        setQuantity(product.quantita)
    }, [])
    
   
  return (
    <>
    <Card style={{ width:'18rem'}}>
    <Card.Img variant="top" src={'https://placehold.co/286x180'}/>
    <Card.Body>
      <Card.Title>{product.prodotto}</Card.Title>
      <Card.Text>
        Prezzo: {product.prezzo}<br/>
        Quantità: <input type="number" min={1} step={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </Card.Text>
       <Button variant="primary" onClick={() => updateQuantity(index, quantity)}>Aggiorna quantità</Button>
       <Button variant="danger" onClick={() => handleRemove(index)}>Rimuovi</Button>    </Card.Body>
  </Card>
    </>
  )
}

export default CartItem