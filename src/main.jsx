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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/tienda-saludable">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)



