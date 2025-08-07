// src/components/NavBar.jsx
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = ({ cart, clearCart }) => {
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

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

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

          {/* Carrito */}
          <CartWidget cart={cart} clearCart={clearCart} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar







