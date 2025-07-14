// src/components/NotFound.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 - Página no encontrada 😓</h1>
      <p className="lead">Lo que buscás no está acá...</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
