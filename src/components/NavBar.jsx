import React, { useState } from 'react'
import { toast } from 'react-toastify'

const NavBar = ({ cart, clearCart }) => {
  const [showCart, setShowCart] = useState(false)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handlePay = () => {
    toast.success(`🛒 ¡Compra realizada por ${total.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS'
    })}! Gracias 🥳`)
    clearCart()
    setShowCart(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 position-relative">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          🥦 Mi Tienda Saludable
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
          </ul>

          <div className="position-relative">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setShowCart(!showCart)}
            >
              🛒 {totalItems} productos - ${total.toLocaleString('es-AR')}
            </button>

            {showCart && (
              <div className="cart-modal">
                <h5>Carrito</h5>
                {cart.length === 0 ? (
                  <p>Tu carrito está vacío.</p>
                ) : (
                  <>
                  
                    <ul className="list-unstyled mb-2">
                      {cart.map((item) => (
                        <li key={item.id} className="mb-2 border-bottom pb-2">
                          <strong>{item.name}</strong> x{item.quantity} <br />
                          <small className="text-muted">
                            Subtotal: {(item.price * item.quantity).toLocaleString('es-AR', {
                              style: 'currency',
                              currency: 'ARS'
                            })}
                          </small>
                        </li>
                      ))}
                    </ul>
                    <p className="fw-bold">
                      Total: {total.toLocaleString('es-AR', {
                        style: 'currency',
                        currency: 'ARS'
                      })}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-success btn-sm" onClick={handlePay}>Pagar</button>
                      <button className="btn btn-danger btn-sm" onClick={clearCart}>Vaciar</button>
                    </div>
                  </>
                  
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar





