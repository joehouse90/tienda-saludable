
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


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

const allProducts = [
  { id: 1, name: 'Manzanas Orgánicas', price: 100, category: 'Frutas', image: img1 },
  { id: 2, name: 'Almendras Naturales', price: 200, category: 'Frutos Secos', image: img2 },
  { id: 3, name: 'Quinoa Orgánica',   price: 150, category: 'Cereales',    image: img3 },
  { id: 4, name: 'Miel Natural',       price: 250, category: 'Endulzantes', image: img4 },
  { id: 5, name: 'Chía Orgánica',      price: 180, category: 'Semillas',    image: img5 },
  { id: 6, name: 'Aceite de Oliva',    price: 300, category: 'Aceites',     image: img6 },
  { id: 7, name: 'Granola Casera',     price: 220, category: 'Cereales',    image: img7 },
  { id: 8, name: 'Jugo Verde Detox',   price: 180, category: 'Bebidas',     image: img8 },
  { id: 9, name: 'Té de Hierbas',      price:  90, category: 'Infusiones',  image: img9 },
  { id:10, name: 'Barra de Cereal',    price: 999, category: 'Cereales',    image: img10 }
]

const ItemListContainer = ({ greeting = 'Catálogo Saludable 🍏', addToCart }) => {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    setLoading(true)
    new Promise((resolve) => {
      const filtered = categoryId
        ? allProducts.filter(p => p.category === categoryId)
        : allProducts
      setTimeout(() => resolve(filtered), 600)
    }).then((res) => {
      setProducts(res)
      setLoading(false)
    })
  }, [categoryId])

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{greeting}</h1>
      {loading
        ? <p>Cargando productos…</p>
        : <ItemList products={products} addToCart={addToCart} />}
    </div>
  )
}

export default ItemListContainer




