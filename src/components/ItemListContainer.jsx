import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = ({
  greeting = "Catálogo Saludable 🍏",
  addToCart,
}) => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("🔥 Intentando cargar productos...");

        const productsRef = collection(db, "productos");

        const q = categoryId
          ? query(productsRef, where("category", "==", categoryId))
          : productsRef;

        const res = await getDocs(q);

        const productosFirebase = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("✅ Productos cargados:", productosFirebase);

        setProducts(productosFirebase);
      } catch (err) {
        console.error("❌ Error al cargar productos:", err);
        setError(err?.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{greeting}</h1>

      {loading ? (
        <p>Cargando productos…</p>
      ) : error ? (
        <div className="alert alert-danger">
          Error cargando productos: {error}
        </div>
      ) : products.length === 0 ? (
        <div className="alert alert-warning">
          No hay productos disponibles.
        </div>
      ) : (
        <ItemList products={products} addToCart={addToCart} />
      )}
    </div>
  );
};

export default ItemListContainer;




