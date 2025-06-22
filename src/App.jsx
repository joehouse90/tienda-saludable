// App.jsx
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  const [cart, setCart] = useState([])

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
console.log(cart)
  return (
    <>
      <NavBar cart={cart} clearCart={clearCart} />
      <ItemListContainer greeting="Bienvenido a nuestra tienda saludable 🍎" addToCart={addToCart} />
    </>
  )
}

export default App

