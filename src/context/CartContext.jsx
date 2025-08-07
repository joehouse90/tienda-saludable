import { createContext, useState } from 'react'

// 1. Creamos el contexto
export const CartContext = createContext()

// 2. Creamos el provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const existingItem = cart.find((p) => p.id === item.id)
    if (existingItem) {
      setCart(
        cart.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      )
    } else {
      setCart([...cart, item])
    }
  }

  const clearCart = () => setCart([])

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        cartQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

