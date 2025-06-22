import React, { useState } from 'react'

const NavBar = ({ cart, clearCart }) => {
  const [showCart, setShowCart] = useState(false)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handlePay = () => {
    alert(`Gracias por tu compra de $${total}! 🎩`)
    clearCart()
    setShowCart(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 position-relative">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">🥦 Mi Tienda Saludable</a>

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
              🛒 {totalItems} productos - ${total}
            </button>

            {showCart && (
              <div className="cart-modal bg-white rounded shadow p-3 mt-2" style={{ width: '300px', position: 'absolute', right: 0, zIndex: 9999 }}>
                <h5 className="mb-3"><i className="bi bi-cart-fill"></i> Carrito</h5>

                {cart.length === 0 ? (
                  <p className="text-muted">Tu carrito está vacío.</p>
                ) : (
                  <>
                    <ul className="list-unstyled">
                      {cart.map((item) => (
                        <li key={item.id} className="mb-3 border-bottom pb-2">
                          <strong>{item.name}</strong> <br />
                          Cantidad: {item.quantity} <br />
                          Subtotal: ${item.price * item.quantity}
                        </li>
                      ))}
                    </ul>
                    <div className="fw-bold fs-6 text-end border-top pt-2">
                      Total: ${total}
                    </div>
                    <div className="d-flex justify-content-between mt-3">
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


