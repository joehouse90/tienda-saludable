import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product, addToCart }) => {
  if (!product) return <p className="text-center mt-5">Cargando producto...</p>

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={`${import.meta.env.BASE_URL}${product.image}`}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-success fw-bold fs-4">${product.price}</p>
          <p className="text-muted">{product.description}</p>

          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={(cantidad) => addToCart({ ...product, quantity: cantidad })}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail






