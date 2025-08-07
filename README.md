# 🥦 Tienda Saludable - Simoes Daniel Joel

Este proyecto corresponde al **Trabajo Final** del curso de **React JS** en **Coderhouse**.  
Se trata de una tienda online de productos saludables desarrollada con **React**, que obtiene datos desde **Firebase Firestore** y permite una experiencia de compra completa: navegación por categorías, detalle de productos, carrito global y generación de órdenes.

---

## 🧩 Componentes principales

- **App** → Componente raíz que define rutas y estructura general.
- **NavBar** → Barra de navegación con enlaces a categorías y carrito.
- **CartWidget** → Botón del carrito con total de productos y monto.
- **ItemListContainer** → Contenedor que obtiene productos de Firebase.
- **ItemList** → Lista de productos renderizados.
- **Item** → Tarjeta individual de producto.
- **ItemDetailContainer** → Contenedor del detalle de un producto.
- **ItemDetail** → Vista detallada del producto seleccionado.
- **ItemCount** → Selector de cantidad.
- **Cart** → Vista del carrito con productos agregados.
- **CheckoutForm** → Formulario de compra.
- **CartItem** → Fila individual de producto en el carrito.
- **NotFound** → Página 404 para rutas inexistentes.

---

## 🧭 Funcionalidades implementadas

- ✅ Listado de productos obtenidos dinámicamente desde Firebase.
- ✅ Vista de detalle para cada producto (`/item/:id`).
- ✅ Filtrado por categorías (`/category/:id`).
- ✅ Carrito de compras global con Context API:
  - Agregar, eliminar y vaciar productos.
  - Cálculo automático de subtotales y total.
- ✅ Formulario de checkout para registrar datos del comprador.
- ✅ Generación de órdenes en Firestore con ID único.
- ✅ Renderizado condicional:
  - Loaders de carga.
  - Mensaje de carrito vacío.
  - Confirmación de compra con ID.
- ✅ Diseño responsive con Bootstrap 5 + CSS personalizado.
- ✅ Notificaciones visuales con React Toastify.
- ✅ Íconos visuales con React Icons.

---

## 🗂️ Estructura del proyecto

src/
├── components/
│ ├── CartWidget.jsx
│ ├── Item.jsx
│ ├── ItemCount.jsx
│ ├── ItemDetail.jsx
│ ├── ItemDetailContainer.jsx
│ ├── ItemList.jsx
│ ├── ItemListContainer.jsx
│ ├── NavBar.jsx
│ ├── NotFound.jsx
│
├── context/
│ └── CartContext.jsx
│
├── App.jsx
├── main.jsx
├── firebaseConfig.js
├── styles.css

public/
└── img/
├── product_1.png
├── product_2.png
└── ...

---

## 🔍 GIF de navegación

> 🎥 A continuación se muestra la navegación: listado general, filtrado por categoría, vista en detalle, agregado al carrito y proceso de compra.

![Demo navegación](demo.gif)