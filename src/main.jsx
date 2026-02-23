import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom'

// Estilos
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Scripts de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 🛒 Cart Context
import { CartProvider } from './context/CartContext' // ✅ Importá el Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ✅ Envolvé App con el contexto */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)


