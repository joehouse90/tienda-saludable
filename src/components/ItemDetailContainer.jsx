import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = doc(db, 'productos', id);

    getDoc(productRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          setProduct(null); // producto no encontrado
        }
        
      })
      .catch((error) => {
        console.error('Error al obtener producto:', error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container mt-4"><p>Cargando producto...</p></div>;

  if (!product) return <div className="container mt-4"><h2>❌ Producto no encontrado</h2></div>;

  return <ItemDetail product={product} addToCart={addToCart} />;
};

export default ItemDetailContainer;


