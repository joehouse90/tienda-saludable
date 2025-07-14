import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

// Productos
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

const mockProducts = [
  { id: 1, name: 'Manzanas Orgánicas', price: 100, category: 'Frutas', image: img1 },
  { id: 2, name: 'Almendras Naturales', price: 200, category: 'Frutos Secos', image: img2 },
  { id: 3, name: 'Quinoa Orgánica',     price: 150, category: 'Cereales',    image: img3 },
  { id: 4, name: 'Miel Natural',         price: 250, category: 'Endulzantes', image: img4 },
  { id: 5, name: 'Chía Orgánica',        price: 180, category: 'Semillas',    image: img5 },
  { id: 6, name: 'Aceite de Oliva',      price: 300, category: 'Aceites',     image: img6 },
  { id: 7, name: 'Granola Casera',       price: 220, category: 'Cereales',    image: img7 },
  { id: 8, name: 'Jugo Verde Detox',     price: 180, category: 'Bebidas',     image: img8 },
  { id: 9, name: 'Té de Hierbas',        price:  90, category: 'Infusiones',  image: img9 },
  { id:10, name: 'Barra de Cereal',      price: 999, category: 'Cereales',    image: img10 }
]

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    new Promise((resolve) => {
      const found = mockProducts.find(p => p.id === parseInt(id))
      setTimeout(() => resolve(found), 500)
    }).then((res) => {
      setProduct(res)
      setLoading(false)
    })
  }, [id])

  if (loading) return <div className="container mt-4"><p>Cargando producto...</p></div>

  if (!product) return <div className="container mt-4"><h2>❌ Producto no encontrado</h2></div>

  return <ItemDetail product={product} addToCart={addToCart} />
}

export default ItemDetailContainer

