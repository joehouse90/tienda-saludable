// src/components/NavBar.jsx
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const NavBar = ({ cart, clearCart }) => {
  const [showCart, setShowCart] = useState(false)

  /* 👉 Categorías para el menú */
  const categories = [
    'Frutas',
    'Frutos Secos',
    'Cereales',
    'Endulzantes',
    'Semillas',
    'Aceites',
    'Bebidas',
    'Infusiones'
  ]

  /* 👉 Totales del carrito */
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  /* 👉 Pagar (simulado) */
  const handlePay = () => {
    toast.success(`🛒 ¡Compra realizada por $${totalPrice.toLocaleString('es-AR')}!`)
    clearCart()
    setShowCart(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm position-relative">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🥦 Tienda&nbsp;Saludable
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links de categorías */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {categories.map(cat => (
              <li key={cat} className="nav-item">
                <NavLink
                  to={`/category/${cat}`}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'}
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Botón carrito */}
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 {totalItems} &nbsp;-&nbsp; $
            {totalPrice.toLocaleString('es-AR')}
          </button>
        </div>

        {/* Modal carrito */}
        {showCart && (
          <div className="cart-modal">
            <h5 className="mb-3">Carrito</h5>

            {cart.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="list-group mb-3">
                  {cart.map(item => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <span className="fw-semibold">{item.name}</span>
                        <span className="badge bg-secondary ms-2">
                          x{item.quantity}
                        </span>
                        <br />
                        <small className="text-muted">
                          Subtotal: $
                          {(item.price * item.quantity).toLocaleString('es-AR')}
                        </small>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="fw-bold text-end mb-3">
                  Total:&nbsp;$
                  {totalPrice.toLocaleString('es-AR')}
                </p>

                <div className="d-flex justify-content-between">
                  <button className="btn btn-success btn-sm" onClick={handlePay}>
                    Pagar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={clearCart}
                  >
                    Vaciar
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar






