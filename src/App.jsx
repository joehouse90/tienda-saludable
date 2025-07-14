import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"


import NavBar              from './components/NavBar'
import ItemListContainer   from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound            from './components/NotFound'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  /* ---------- Carrito ---------- */
  const [cart, setCart] = useState([])

  /* Persistencia en localStorage */
  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  /* Agregar / limpiar */
  const addToCart = (product) => {
    const existing = cart.find(i => i.id === product.id)
    existing
      ? setCart(cart.map(i =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
      : setCart([...cart, { ...product, quantity: 1 }])
  }
  const clearCart = () => setCart([])

  /* ---------- JSX ---------- */
  return (
    <>
      <NavBar cart={cart} clearCart={clearCart} />

      {/* Rutas ‑ React Router */}
      <Routes>
        {/* Catálogo completo */}
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenido a nuestra tienda saludable 🥦"
              addToCart={addToCart}
            />
          }
        />

        {/* Catálogo por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer addToCart={addToCart} />}
        />

        {/* Detalle de producto */}
        <Route
          path="/item/:id"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Toast global */}
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </>
  )
}

export default App



