import React, { useState } from 'react'

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary" onClick={decrement}>−</button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      </div>

      <button
        className="btn btn-success"
        onClick={() => onAdd(count)}
      >
        ➕ Agregar {count}
      </button>
    </div>
  )
}

export default ItemCount

