import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [cart, setCart] = useState([])

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      <NavBar cart={cart} clearCart={clearCart} />
      <ItemListContainer
        greeting="Bienvenido a nuestra tienda saludable 🍎"
        addToCart={addToCart}
      />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App


