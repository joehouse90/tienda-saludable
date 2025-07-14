import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product, addToCart }) => {
  if (!product) return <p className="text-center mt-5">Cargando producto...</p>

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-success fw-bold fs-4">${product.price}</p>
          <p className="text-muted">
            Producto saludable de excelente calidad. Ideal para una alimentación consciente y nutritiva. 🌿
          </p>

          {/* Componente con contador de cantidad */}
          <ItemCount
            stock={10}
            initial={1}
            onAdd={(cantidad) => addToCart({ ...product, quantity: cantidad })}
          />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail




