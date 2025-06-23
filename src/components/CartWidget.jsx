import React, { useState } from 'react'

const CartWidget = ({ cart, clearCart }) => {
  const [showCart, setShowCart] = useState(false)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handlePay = () => {
    alert(`Gracias por tu compra de $${total}! 🎩`)
    clearCart()
    setShowCart(false)
  }

  return (
    <div className="position-relative">
      <button
        className="btn btn-outline-light btn-sm"
        onClick={() => setShowCart(!showCart)}
      >
        🛒 {totalItems} productos - ${total}
      </button>

      {showCart && (
        <div className="cart-modal">
          <h5 className="mb-3">Carrito</h5>
          {cart.length === 0 ? (
            <p className="text-muted">Tu carrito está vacío.</p>
          ) : (
            <>
              <ul className="list-unstyled mb-2">
                {cart.map((item) => (
                  <li key={item.id} className="mb-2 border-bottom pb-2">
                    <strong>{item.name}</strong><br />
                    Cantidad: {item.quantity}<br />
                    <span className="text-muted">Subtotal: ${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <p className="fw-bold">Total: ${total}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-success btn-sm" onClick={handlePay}>Pagar</button>
                <button className="btn btn-danger btn-sm" onClick={clearCart}>Vaciar</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartWidget

