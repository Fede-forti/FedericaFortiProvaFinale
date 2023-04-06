import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { IProduct } from './Component2'

interface IProps {
    product: IProduct
    handleAddtoCart: (product: IProduct) => void
}

const ProductCard = (props:IProps) => {
    const {product, handleAddtoCart} = props
  return (
    <div>
  <Card style={{ width:'18rem'}}>
    <Card.Img variant="top" src={'https://placehold.co/286x180'}/>
    <Card.Body>
      <Card.Title>{product.productName}</Card.Title>
      <Card.Text>
        Prezzo: {product.unitPrice}<br/>
        Quantità rimasta: {product.unitsInStock}
      </Card.Text>
      <Button variant="primary" onClick={() => handleAddtoCart(product)}>Aggiungi al carrello</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default ProductCard