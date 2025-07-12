import React, { useEffect, useState } from 'react';
import { useParams,Link} from 'react-router-dom';
import axios from 'axios';
import { getSingleProduct } from '../services/postService';
import { useCart } from './context/Cart';
import percentag from '../assets/images/percentag.png';
import star from '../assets/images/star.png';
import shipping from '../assets/images/shipping.png';
import { IoBagHandleOutline } from "react-icons/io5";
import { getAllProducts } from '../services/postService';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';

function ProductDetail() {
      const { addToCart } = useCart();
      const [quantity, setQuantity] = useState(1);
      
      const[products,setProducts]=useState([]);
      const recentProducts = [...products]
       .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);
    const [addedItems, setAddedItems] = useState(new Set());
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const imgpath = "http://localhost:5000";

useEffect(() => {
  setProduct(null); // reset to show loading
  getAllProducts()
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));

  getSingleProduct(id)
    .then(res => setProduct(res.data))
    .catch(err => console.error(err));
    window.scrollTo(0, 0); 
}, [id]);

  const handleAddprod = (item) => {
    addToCart(item);
    setAddedItems((prev) => new Set(prev).add(item._id));

    // Optional: Revert back to "Add to Cart" after 3 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const updated = new Set(prev);
        updated.delete(item._id);
        return updated;
      });
    }, 3000);
  };

  if (!product) return <div>Loading...</div>;
    const handleAdd = (productWithQty) => {
    addToCart(productWithQty);
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
    <div className="container my-5 blogcontainer">
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
          <p className='py-3'>{product.short_description}</p>
{/* <div className="row  mb-3" style={{ fontWeight: 500,color: '#525252'  }}>
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
</div> */}

         
    <div className="d-flex align-items-center gap-3 my-3">
  {/* Quantity Controls */}
  <div className="btn-group rounded-pill border col-md-4 col-sm-6">
    <button
      className="btn btn-light"
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
    >
      &minus;
    </button>
    <span className="btn btn-outline-light disabled text-black">{quantity}</span>
    <button
      className="btn btn-light"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      &#43;
    </button>
  </div>

  {/* Add to Cart Button */}
  <button
    className="btn btn-dark rounded-pill px-4 d-flex align-items-center gap-2 col-md-8 col-sm-6 flex justify-content-center"
    id="addcart"
onClick={() => {
  handleAdd({ ...product, quantity });
  setQuantity(1);
}}


    disabled={addedItems.has(product._id) || product.stock === 0}
  >
    {addedItems.has(product._id) ? (
      'Added Successfully'
    ) : (
      <>
        Add to Cart
        <IoBagHandleOutline/>
      </>
    )}
  </button>
</div>
<p className='py-2'><span className='fw-bold'>Category :</span> {product.category}</p>
<p className='py-2'><span className='fw-bold'>Tag :</span>{product.tag}</p>

        </div>
      </div>
          <div className="row pt-5">
        <div className="col-md-12">
          <h4 className='fw-bold py-3 text-decoration-underline'  style={{ textDecoration: 'underline', textDecorationColor: 'green' }} >Descriptions</h4>
<div dangerouslySetInnerHTML={{ __html: product.long_description }} />
        </div>
         </div>
         <Container className='my-5 blogcontainer'>
      
 <Row className='blogcard'>
  {recentProducts.map((item,index)=>(
        <Col xs={12} md={3} key={index} className=' mt-3'>
          <Card >
     <Link to={`/product/${item._id}`}> <Card.Img variant="top" src={`http://localhost:5000${item.product_image}`}/>    </Link>
 <Card.Body>
  <div className="d-flex justify-content-between align-items-center mb-2">
    <Card.Title className="mb-0">{item.name}</Card.Title>
    <button
      className="btn "
      onClick={() => handleAddprod(item)}
      disabled={addedItems.has(item._id) || item.stock === 0}
      title={addedItems.has(item._id) ? 'Added Successfully' : 'Add to Cart'}
    >
      <IoBagHandleOutline size={20} />
    </button>
  </div>

  <Card.Text>₹{item.price}</Card.Text>
</Card.Body>

    </Card>
        </Col>
         ))}
      </Row>
    </Container>
    </div>
    
  );
}

export default ProductDetail;
