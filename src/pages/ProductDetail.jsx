import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getSingleProduct } from '../services/postService';
import { useCart } from './context/Cart';
import percentag from '../assets/images/percentag.png';
import star from '../assets/images/star.png';
import shipping from '../assets/images/shipping.png';

function ProductDetail() {
      const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState(new Set());
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const imgpath = "http://localhost:5000";

  useEffect(() => {
  getSingleProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;
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
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <img
            src={`${imgpath}${product.product_image}`}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <h2>{product.name}</h2>  
          <p className="text-muted">{product.category}</p>
          <h4  style={{ fontWeight: 600,color: '#0C0C0C'  }}>₹{product.price}</h4>
          <p>{product.short_description}</p>
<div className="row  mb-3" style={{ fontWeight: 500,color: '#525252'  }}>
  <div className="col-6 d-flex align-items-center mb-2">
    <img src={shipping}  width={20} className="me-2" />
    Free Shipping
  </div>
  <div className="col-6 d-flex align-items-center mb-2">
    <img src={percentag} width={20} className="me-2" />
    100% Purchase Protection
  </div>
  <div className="col-6 d-flex align-items-center mb-2">
    <img src={star}  width={20} className="me-2" />
    Assured Quality
  </div>
</div>

           <button
                className="cardsbutton my-3 px-5 py-3"
                id='addcart'
                onClick={() => handleAdd(product)}
                disabled={addedItems.has(product._id) || product.stock === 0}
              >
                {addedItems.has(product._id)
                  ? 'Added Successfully'
                  : 'Add to Cart'}
              </button>
        </div>
      </div>
          <div className="row pt-5">
        <div className="col-md-12">
<div dangerouslySetInnerHTML={{ __html: product.long_description }} />
        </div>
         </div>
    </div>
  );
}

export default ProductDetail;
