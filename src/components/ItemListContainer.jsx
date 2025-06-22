import React, { useState } from 'react'

// Importación de imágenes locales
import img1 from '../assets/product_1.png'
import img2 from '../assets/product_2.png'
import img3 from '../assets/product_3.png'
import img4 from '../assets/product_4.png'
import img5 from '../assets/product_5.png'
import img6 from '../assets/product_6.png'
import img7 from '../assets/product_7.png'
import img8 from '../assets/product_8.png'
import img9 from '../assets/product_9.png'
import img10 from '../assets/product_10.png'

const products = [
  { id: 1, name: 'Manzanas Orgánicas', price: 100, category: 'Frutas', image: img1 },
  { id: 2, name: 'Almendras Naturales', price: 200, category: 'Frutos Secos', image: img2 },
  { id: 3, name: 'Quinoa Orgánica', price: 150, category: 'Cereales', image: img3 },
  { id: 4, name: 'Miel Natural', price: 250, category: 'Endulzantes', image: img4 },
  { id: 5, name: 'Chía Orgánica', price: 180, category: 'Semillas', image: img5 },
  { id: 6, name: 'Aceite de Oliva', price: 300, category: 'Aceites', image: img6 },
  { id: 7, name: 'Granola Casera', price: 220, category: 'Cereales', image: img7 },
  { id: 8, name: 'Jugo Verde Detox', price: 180, category: 'Bebidas', image: img8 },
  { id: 9, name: 'Té de Hierbas', price: 90, category: 'Infusiones', image: img9 },
  { id: 10, name: 'Barra de Cereal', price: 999, category: 'Cereales', image: img10 }
]

const ItemListContainer = ({ greeting, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const filtered = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{greeting}</h1>

      <div className="mb-4">
        <label htmlFor="categorySelect" className="form-label">Filtrar por categoría:</label>
        <select
          id="categorySelect"
          className="form-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {[...new Set(products.map(p => p.category))].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="row">
        {filtered.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
            <div className="card w-100 shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top img-fluid"
                style={{ maxHeight: '180px', objectFit: 'contain' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold">${product.price}</p>
                <button 
                  className="btn btn-success mt-auto"
                  onClick={() => addToCart(product)}
                >
                  ➕ Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => alert("Gracias por tu compra saludable 🥦🍎")}
          >
            🛍️ Pagar
          </button>
        </div>
      )}
    </div>
  )
}

export default ItemListContainer



