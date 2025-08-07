import { Link } from 'react-router-dom';


const Item = ({ product, addToCart }) => {
  // Aseguramos que la imagen se cargue correctamente desde public/img/
  const imageUrl = `${import.meta.env.BASE_URL}${product.image.startsWith('/') ? product.image.slice(1) : product.image}`;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
      <div className="card w-100 shadow-sm">
        <img
          src={imageUrl}
          alt={product.title}
          className="card-img-top img-fluid"
          style={{ maxHeight: '180px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text fw-bold">${product.price}</p>

          <Link className="btn btn-outline-primary mb-2" to={`/item/${product.id}`}>
            🔍 Ver detalle
          </Link>

          <button className="btn btn-success mt-auto" onClick={() => addToCart(product)}>
            ➕ Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;


