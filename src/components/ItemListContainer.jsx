import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting = 'Catálogo Saludable 🍏', addToCart }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const productsRef = collection(db, 'productos');
    const q = categoryId
      ? query(productsRef, where('category', '==', categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const productosFirebase = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productosFirebase);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{greeting}</h1>
      {loading
        ? <p>Cargando productos…</p>
        : <ItemList products={products} addToCart={addToCart} />}
    </div>
  );
};

export default ItemListContainer;




