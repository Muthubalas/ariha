import React , { useState }from 'react';
import { useCart } from '../context/Cart';
import { Link } from 'react-router-dom';

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
          <div className="card h-100 shadow-sm">
              <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={`${imgpath}${product.product_image}`} className="card-img-top" alt={product.name} />
             </Link>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">₹{product.price}</p>
              <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
              
                <button
                className="cardsbutton my-3"
                onClick={() => handleAdd(product)}
                disabled={addedItems.has(product._id) || product.stock === 0}
              >
                {addedItems.has(product._id)
                  ? 'Added Successfully'
                  : 'Add to Cart'}
              </button>
             
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
