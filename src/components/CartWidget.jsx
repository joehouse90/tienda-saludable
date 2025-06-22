import React from 'react'

const CartWidget = ({ cart }) => {
  return (
    <button className="btn">
      🛒 {cart.length}
    </button>
  )
}

export default CartWidget

