
import React from 'react'
import Item from './Item'

const ItemList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map(product => (
        <Item key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ItemList