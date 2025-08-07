import React, { useState } from 'react'
import { db } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const CartWidget = ({ cart, clearCart }) => {
  const [showCart, setShowCart] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setBuyer({ ...buyer, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total,
      date: serverTimestamp()
    }

    try {
      const ordersCollection = collection(db, "ordenes")
      const docRef = await addDoc(ordersCollection, order)
      alert(`¡Gracias por tu compra ${buyer.name}! Tu número de orden es: ${docRef.id}`)
      clearCart()
      setShowCart(false)
      setShowForm(false)
      setBuyer({ name: '', phone: '', email: '' })
    } catch (error) {
      alert("Ocurrió un error al procesar la compra.")
    }
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
                    <strong>{item.title}</strong><br />
                    Cantidad: {item.quantity}<br />
                    <span className="text-muted">Subtotal: ${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>

              <p className="fw-bold">Total: ${total}</p>

              {!showForm ? (
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => setShowForm(true)}
                  >
                    Pagar
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={clearCart}>Vaciar</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control mb-2"
                    value={buyer.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    className="form-control mb-2"
                    value={buyer.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={buyer.email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-sm w-100">
                    Confirmar compra
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CartWidget





