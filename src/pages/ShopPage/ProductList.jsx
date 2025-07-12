import React , { useState }from 'react';
import { useCart } from '../context/Cart';
import { Link } from 'react-router-dom';
import { IoBagHandleOutline } from "react-icons/io5";

function ProductList({ products }) {
    const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState(new Set());
  if (products.length === 0) {
    return <div className="alert alert-warning">No products found</div>;
  }
  const imgpath = "http://localhost:5000";

  const handleAdd = (product) => {
    addToCart(product);
    setAddedItems((prev) => new Set(prev).add(product._id));

    // Optional: Revert back to "Add to Cart" after 3 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const updated = new Set(prev);
        updated.delete(product._id);
        return updated;
      });
    }, 3000);
  };
  return (
    <div className="row">
      {products.map((product) => (
     <div key={product.id} className="col-md-4 mb-4">
  <div className="card h-100 shadow-sm position-relative">
    
    {/* Image wrapper with overlay badge */}
    <div className="position-relative">
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={`${imgpath}${product.product_image}`}
          className="card-img-top"
          alt={product.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
      </Link>
      
      {/* Stock badge overlay */}
      <span
        className={`badge position-absolute top-0 end-0 m-2 px-2 py-1 ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}
        style={{ fontSize: '0.75rem' }}
      >
        {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
      </span>
    </div>

    {/* Card body */}
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="card-title mb-0">{product.name}</h5>
        <button
          className="btn "
          onClick={() => handleAdd(product)}
          disabled={addedItems.has(product._id) || product.stock === 0}
          title={addedItems.has(product._id) ? 'Added Successfully' : 'Add to Cart'}
        >
          <IoBagHandleOutline/>
        </button>
      </div>

      <p className="card-text mb-0 fw-bold">₹{product.price}</p>
    </div>
  </div>
</div>

      ))}
    </div>
  );
}

export default ProductList;
