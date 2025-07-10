import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import banner from '../assets/images/banner.webp';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fssai from '../assets/images/fssai.png';
import veg from '../assets/images/veg.png';
import noartf from '../assets/images/noartf.png';
import testi1 from '../assets/images/testi1.png';
import testi2 from '../assets/images/testi2.png';
import testi3 from '../assets/images/testi3.png';
import slide1 from '../assets/images/banner1.webp';
import slide2 from '../assets/images/banner2.webp';
import slide3 from '../assets/images/banner3.webp';
import sidebanner1 from '../assets/images/sidebanner1.webp';
import sidebanner from '../assets/images/sidebanner.webp';
import Card from 'react-bootstrap/Card';
import category1 from '../assets/images/category1.png';
import category2 from '../assets/images/category2.png';
import category3 from '../assets/images/category3.png';
import category4 from '../assets/images/category4.png';
import category5 from '../assets/images/category5.png';
import category6 from '../assets/images/category6.png';
import category7 from '../assets/images/category7.png';
import category8 from '../assets/images/category8.png';
import category9 from '../assets/images/category9.png';
import category10 from '../assets/images/category10.png';
import category11 from '../assets/images/category11.png';
import slides1 from '../assets/images/slide1.png';
import slides2 from '../assets/images/slide2.png';
import slides3 from '../assets/images/slide3.png';
import colimage from '../assets/images/colimage.png';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import logo7 from '../assets/images/logo7.png';
import logo8 from '../assets/images/logo8.png';
import logo9 from '../assets/images/logo9.png';
import logo10 from '../assets/images/logo10.png';
import logo11 from '../assets/images/logo11.png';
import logo12 from '../assets/images/logo12.png';
import logo13 from '../assets/images/logo13.png';
import logo14 from '../assets/images/logo14.png';
import logo15 from '../assets/images/logo15.png';
import logo16 from '../assets/images/logo16.png';
import logo17 from '../assets/images/logo17.png';
import logo18 from '../assets/images/logo18.png';
import logo19 from '../assets/images/logo19.png';
import logo20 from '../assets/images/logo20.png';
import logo21 from '../assets/images/logo21.png';
import logo22 from '../assets/images/logo22.png';

import { getAllProducts } from '../services/postService';
import { getAllPosts } from '../services/postService';
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from './context/Cart';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay ,Pagination,Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());
  const { addToCart } = useCart();
   const [selectedProduct, setSelectedProduct] = useState(null);
const api1="https://backendapi.memoriessalon.in/list-blog"
  const product = [
    {
      id: 1,
      name: 'Chocolate Brownies',
      price: 100,
      image: '/src/assets/images/prodimage1.png',
    },
    {
      id: 2,
      name: 'Sweet Bun Pack of 4 - 220G',
      price: 55,
      image: '/src/assets/images/prodimage2.png',
    },
    {
      id: 3,
      name: 'Chocolate Muffins', 
      price: 34,
     image: '/src/assets/images/prodimage3.png',
    },
    {
      id: 4,
      name: 'Red Velvet Muffins',
      price: 180,
     image: '/src/assets/images/prodimage4.png',
    },
    {
      id: 5,
      name: 'Masala Thepla - Pack of 5',
      price: 100,
     image: '/src/assets/images/prodimage5.png',
    },
    {
      id: 6,
      name: 'Jam - Pack of 2 - 120G',
      price: 40,
      image: '/src/assets/images/prodimage6.png',
    },
  ];
  
  useEffect(() => {

const fetchData=async()=>{
  try{
    const [res1,res2]=await Promise.all([
      getAllProducts()
    ])
   
    setProducts(res1.data);
    setCategory(res2.data);
  }
  catch (err) {
    console.error('Error fetching data:', err);
  }
};
fetchData();
}, []);
const uniqueCategoryProducts = [];
const seenCategories = new Set();

// Sort by _id assuming MongoDB ObjectId (recent = larger _id string)
const sortedProducts = [...products].sort((a, b) => b._id.localeCompare(a._id));

sortedProducts.forEach((item) => {
  const categoryKey = item.category.toLowerCase(); // normalize category
  if (!seenCategories.has(categoryKey)) {
    uniqueCategoryProducts.push(item);
    seenCategories.add(categoryKey);
  }
});
 const[blogs,setBlogs]=useState([]);
  const navigate=useNavigate();
      const recentBlogs = [...blogs]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 12);
    useEffect(()=>{
   getAllPosts()
   .then((response) => {
      console.log("datas ===>", response.data);
      setBlogs(response.data);
    })
   
    .catch(console.error);
    },[])

    const handleReadMore=(id)=>{
      console.log("id",id)
  navigate(`/blogs/${id}`);
    }

const imgpath="http://localhost:5000"

  return (
   <>
<div className="banner">
<div className="container py-2">
  <div className="row">
    {/* Left Column - 50px height */}
 <div className="col-md-8">
  <div style={{   padding: '0 10px' }}>
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      style={{ height: '100%' }}
    >
      <SwiperSlide>
        <img src={slide1} alt="slide1" style={{  width: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide2" style={{  width: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide3" style={{  width: '100%', objectFit: 'cover' }} />
      </SwiperSlide>
    </Swiper>
  </div>
</div>


    {/* Right Column - Two stacked 25px divs */}
 <div className="col-md-4">
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0 10px',
    }}
  >
    {/* Top Image */}
    <img
      src={sidebanner}
      alt="slide1"
      style={{ width: '100%', objectFit: 'cover' }}
    />

    {/* Bottom Image */}
    <img
      src={sidebanner1}
      alt="slide2"
      style={{ width: '100%', objectFit: 'cover' }}
    />
  </div>
</div>

  </div>
</div>

</div>
<div className="list">
<Container className='shadow-sm py-5'>
      <Row>
     

        <Col sm={12} md={4} className="column">
  <div className="d-flex align-items-center">
    <img src={fssai} alt="logo" width="100px" className="me-3" />
    <div className='text-start'>
      <h5 className="mb-2 heading fw-bold">FSSAI Certified Facility</h5>
      <p className="mb-0 para">Approved. Trusted. Safe</p>
    </div>
  </div>
</Col>
   <Col sm={12} md={4} className="column">
  <div className="d-flex align-items-center">
    <img src={noartf } alt="logo" width="80px" className="me-3" />
    <div className='text-start'>
      <h5 className="mb-2 heading fw-bold">No artificial colors or flavors</h5>
      <p className="mb-0 para">Naturally delicious</p>
    </div>
  </div>
</Col>
   <Col sm={12} md={4} className="column">
  <div className="d-flex align-items-center">
    <img src={veg } alt="logo" width="80px" className="me-3" />
    <div className='text-start'>
      <h5 className="mb-2 heading fw-bold">100% vegetarian ingredients</h5>
      <p className="mb-0 para">Purely plant-based goodness</p>
    </div>
  </div>
</Col>
       
      </Row>
   
    </Container>
    <Container className='py-5 my-5'>
        <h2>Popular Categories</h2>
        <Row className='pt-5'>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category1} />
      <Card.Body>
        <Card.Title className='text-center'> Brownies</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category2} />
      <Card.Body>
        <Card.Title className='text-center'> Pav Buns</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category3} />
      <Card.Body>
        <Card.Title className='text-center'> Burger Buns</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category4} />
      <Card.Body>
        <Card.Title className='text-center'> Sweet Buns</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category5} />
      <Card.Body>
        <Card.Title className='text-center'> Breads</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category6} />
      <Card.Body>
        <Card.Title className='text-center'> Muffins</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
        </Row>
        <Row className='pt-5'>
           <Col md={1} sm={12} style={{visibility:"hidden"}}>
            
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category7} />
      <Card.Body>
        <Card.Title className='text-center'> Thepla</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category8} />
      <Card.Body>
        <Card.Title className='text-center'>Flat Breads</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category9} />
      <Card.Body>
        <Card.Title className='text-center'> Filled Buns</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category10} />
      <Card.Body>
        <Card.Title className='text-center'> Low GI Loaf</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={2} sm={12} className='categorycard'>
            <Card className='py-3 px-2 '>
      <Card.Img variant="top" src={category11} />
      <Card.Body>
        <Card.Title className='text-center'> Loaves</Card.Title>
       
      </Card.Body>
    </Card>
          </Col>
          <Col md={1} sm={12} style={{visibility:"hidden"}}>
            
          </Col>
        </Row>
    </Container>

</div>
<div className="deal">
<Container className='py-5 my-5'>
<h2>Hot Deals</h2>
 <Row>
        {/* Left panel */}
       <Col md={4} sm={12}>
  <div className="p-3 border rounded h-100 d-flex flex-column" style={{ height: '100%' }}>
    {selectedProduct ? (
      <>
        {/* Image Section: 75% height */}
        <div style={{ flex: '0 0 75%' }}>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="mb-3"
          />
        </div>

        {/* Info Section: 25% height */}
        <div
          className="d-flex flex-column justify-content-center text-center"
          style={{ flex: '0 0 25%' }}
        >
            <Button className='yellowbutton mb-2 p-2' size="sm">
           Add to Cart  <IoBagHandleOutline/>
          </Button>
          <h4 className="mb-2 text-dark fw-bold">{selectedProduct.name}</h4>
          <p className="mb-2">₹{selectedProduct.price}</p>
        
        </div>
      </>
    ) : (
      <p>Select a product to view details here</p>
    )}
  </div>
</Col>


        {/* Right grid with 2 rows × 3 cards */}
        <Col md={8} sm={12}>
          <Row>
            {product.map((product) => (
              <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
                <Card
                  className="h-100"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProduct(product)}
                >
                  <Card.Img
                  className='pt-2'
                    variant="top"
                    src={product.image}
                    style={{ height: '150px', objectFit: 'cover' }}
                  />
                  <Card.Body>
  <div className="d-flex justify-content-between align-items-center">
    <div>
      <Card.Title className="mb-1 product">{product.name}</Card.Title>
      <Card.Text className="mb-0 price">₹{product.price}</Card.Text>
    </div>
    <Button className="shopcart" size="sm">
      <IoBagHandleOutline />
    </Button>
  </div>
</Card.Body>

                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
</Container>
</div>
 <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slides1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slides2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slides3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slides1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slides2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slides3} alt="Slide 3" /></SwiperSlide>
      </Swiper>
    </Container>

{/* <Container className='cards'>
  <h2>Trending Now</h2>
<Row className='cardsrow'>
{products.map((item) => (
   <Col key={item.id} xs={12} sm={6} md={4} lg={3} className='cardscol'> 
   <Card className='mt-2'>
     <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
 <Card.Img variant="top"   src={`${imgpath}${item.product_image}`} alt={item.name} />
 </Link>
 <Card.Body>
   <Card.Title className='bold'>{item.name}</Card.Title>
   <Card.Text>
   {item.category}
  <h5 className='bold' style={{paddingTop:'15px'}}>{item.price}</h5> 
   </Card.Text>
  <Button
  variant={addedItems.has(item._id) ? "success" : "primary"}
  className='cardsbutton'
  onClick={() => {
    addToCart(item);
    setAddedItems(prev => new Set(prev).add(item._id));
  }}
  disabled={addedItems.has(item._id)}
>
  {addedItems.has(item._id) ? "Added Successfully" : "Add to cart"}
</Button>

 </Card.Body>
</Card>

   </Col>
    ))}
     
      </Row>
      
    
    </Container> */}
   
    {/* <Container className='cards'>
  <h2>Shop by category</h2>
  <Row className='cardsrow'>
    {uniqueCategoryProducts.map((item) => (
      <Col key={item._id} xs={12} sm={6} md={4} lg={3} className='cardscol'>
        <Card className='mt-2'>
            <Link to={`/product`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card.Img variant="top" src={`${imgpath}${item.product_image}`} alt={item.name} />
          </Link>
          <h5 className="overlay-text">{item.category}</h5>
        </Card>
      </Col>
    ))}
  </Row>
</Container> */}


    <Container className='cards my-5 py-5'>
  {/* <h2>Shop by category</h2> */}
  <Row >
        <Col xs={12} md={7}>
         <img  src={colimage} alt="colimage"  style={{width:'100%'}} />
        </Col>
        <Col xs={12} md={5} className='d-flex flex-column align-items-start justify-content-center'>
    
          <p className='mb-3 text-start fs-2 '>Why Ariha?
          </p>
    
   <ul className='list-unstyled'>
<li className="mb-3">
  <div className="d-flex align-items-center mb-1">
    <span
      className="me-3 d-flex justify-content-center align-items-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      backgroundColor:"#FBF503",
        color: "black",
        fontSize: "14px"
      }}
    >
      <i className="fas fa-check"></i>
    </span>
    <span className="fs-5 queshead">Freshly Baked Everyday</span>
  </div>
  <p className="mb-0 ms-5 quespara">Made in small batches for uncompromised quality.</p>
</li>

<li className="mb-3">
  <div className="d-flex align-items-center mb-1">
    <span
      className="me-3 d-flex justify-content-center align-items-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      backgroundColor:"#FBF503",
        color: "black",
        fontSize: "14px"
      }}
    >
      <i className="fas fa-check"></i>
    </span>
    <span className="fs-5 queshead">Clean Ingredients</span>
  </div>
  <p className="mb-0 ms-5 quespara">No preservatives, just wholesome goodness.</p>
</li>
<li className="mb-3">
  <div className="d-flex align-items-center mb-1">
    <span
      className="me-3 d-flex justify-content-center align-items-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      backgroundColor:"#FBF503",
        color: "black",
        fontSize: "14px"
      }}
    >
      <i className="fas fa-check"></i>
    </span>
    <span className="fs-5 queshead">Wide Variety</span>
  </div>
  <p className="mb-0 ms-5 quespara">From sweet treats to healthy loaves.</p>
</li>
<li className="mb-3">
  <div className="d-flex align-items-center mb-1">
    <span
      className="me-3 d-flex justify-content-center align-items-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      backgroundColor:"#FBF503",
        color: "black",
        fontSize: "14px"
      }}
    >
      <i className="fas fa-check"></i>
    </span>
    <span className="fs-5 queshead">Trusted by Thousands</span>
  </div>
 
  <p className="mb-0 ms-5 quespara">Supplying to homes, cafes, and kitchens nationwide.</p>
</li>
   </ul>
    <button className="shop-now-button">
  Shop Now <span className="arrow">→</span>
</button>

        </Col>
      </Row>
    </Container>
    <div className="div">
<Container className='cards my-5'>
  <h2 className='text-start'>Customer Testimonials </h2>
  <Row>
<Col md={4} xs={12}>
  <Card className='text-start p-3'>
    <Card.Body>
      {/* Quote Icon */}
      <div className='mb-2'>
        <i className="fas fa-quote-left fa-lg text-muted"></i>
      </div>

      {/* Testimonial Text */}
      <Card.Text>
       I’m extremely careful about what I eat—and Ariha’s Low GI breads have become a non-negotiable part of my diet. The multigrain seeded loaf is packed with fiber and actually keeps me full till lunchtime. No bloating, no energy crashes, just clean, wholesome eating. It’s bread I can trust!
      </Card.Text>

      {/* User + Rating */}
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <Card.Img
          src={testi1}
          alt="logo"
          style={{ width: '60px', height: '60px', borderRadius: '100px'}}
          className='me-3'
        />

        {/* Rating Stars */}
        <div className='d-flex align-items-center'>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star-half-alt text-warning me-1"></i>
          <i className="far fa-star text-warning"></i>
        </div>
      </div>
    </Card.Body>
  </Card>
</Col>
<Col md={4} xs={12}>
  <Card className='text-start p-3'>
    <Card.Body>
      {/* Quote Icon */}
      <div className='mb-2'>
        <i className="fas fa-quote-left fa-lg text-muted"></i>
      </div>

      {/* Testimonial Text */}
      <Card.Text>
       With two kids and a hectic work life, I barely have time to cook elaborate breakfasts. Ariha’s Spiced Low GI loaf has been a lifesaver. I just toast it, add some hummus or veggies, and I’m good to go. It’s healthy, filling, and actually delicious. Can’t recommend it enough!
      </Card.Text>

      {/* User + Rating */}
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <Card.Img
          src={testi2}
          alt="logo"
          style={{ width: '60px', height: '60px', borderRadius: '100px'}}
          className='me-3'
        />

        {/* Rating Stars */}
        <div className='d-flex align-items-center'>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star-half-alt text-warning me-1"></i>
          <i className="far fa-star text-warning"></i>
        </div>
      </div>
    </Card.Body>
  </Card>
</Col>
<Col md={4} xs={12}>
  <Card className='text-start p-3'>
    <Card.Body>
      {/* Quote Icon */}
      <div className='mb-2'>
        <i className="fas fa-quote-left fa-lg text-muted"></i>
      </div>

      {/* Testimonial Text */}
      <Card.Text>
        Finding a bread that doesn’t spike my sugar has always been a challenge. Ariha's Salted Low GI loaf has changed the game for me. It tastes great, doesn’t mess with my glucose levels, and stays fresh without refrigeration. It’s a relief to finally enjoy toast again—without the worry.
      </Card.Text>

      {/* User + Rating */}
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <Card.Img
          src={testi3}
          alt="logo"
          style={{ width: '60px', height: '60px', borderRadius: '100px' }}
          className='me-3'
        />

        {/* Rating Stars */}
        <div className='d-flex align-items-center'>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star text-warning me-1"></i>
          <i className="fas fa-star-half-alt text-warning me-1"></i>
          <i className="far fa-star text-warning"></i>
        </div>
      </div>
    </Card.Body>
  </Card>
</Col>

  </Row>
</Container>
    </div>
    {/* ----Blog */}
    <Container className='my-5'>
        <h2 className='text-center'>Latest Blogs </h2>
       <Row className='blogcard'>
  {recentBlogs.map((item,index)=>(
        <Col xs={12} md={3} key={index} className=' mt-3'>
          <Card >
     
      <Card.Body>
        <Card.Title className='blogtitle'>{item.title}</Card.Title>
        <Button className="read" onClick={() => handleReadMore(item._id)}>
  Read more → 
</Button>

      </Card.Body>
    </Card>
        </Col>
         ))}
      </Row>
    </Container>




 <Container id="logocontainer" className='my-5'>
  <Swiper
    modules={[Autoplay]}
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 7 },
    }}
  >
    <SwiperSlide><img src={logo1} alt="Logo 1" className="logo-img" /></SwiperSlide>
    <SwiperSlide><img src={logo2} alt="Logo 1" className="logo-img" /></SwiperSlide>
   <SwiperSlide><img src={logo3} alt="Logo 1" className="logo-img" /></SwiperSlide>
    <SwiperSlide><img src={logo4} alt="Logo 1" className="logo-img" /></SwiperSlide>
     <SwiperSlide><img src={logo5} alt="Logo 1" className="logo-img" /></SwiperSlide>
      <SwiperSlide><img src={logo6} alt="Logo 1" className="logo-img" /></SwiperSlide>
       <SwiperSlide><img src={logo7} alt="Logo 1" className="logo-img" /></SwiperSlide>
        <SwiperSlide><img src={logo8} alt="Logo 1" className="logo-img" /></SwiperSlide>
         <SwiperSlide><img src={logo9} alt="Logo 1" className="logo-img" /></SwiperSlide>
          <SwiperSlide><img src={logo10} alt="Logo 1" className="logo-img" /></SwiperSlide>
           <SwiperSlide><img src={logo11} alt="Logo 1" className="logo-img" /></SwiperSlide>
            <SwiperSlide><img src={logo12} alt="Logo 1" className="logo-img" /></SwiperSlide>
             <SwiperSlide><img src={logo13} alt="Logo 1" className="logo-img" /></SwiperSlide>
              <SwiperSlide><img src={logo14} alt="Logo 1" className="logo-img" /></SwiperSlide>
               <SwiperSlide><img src={logo15} alt="Logo 1" className="logo-img" /></SwiperSlide>
                <SwiperSlide><img src={logo16} alt="Logo 1" className="logo-img" /></SwiperSlide>
                 <SwiperSlide><img src={logo17} alt="Logo 1" className="logo-img" /></SwiperSlide>
                  <SwiperSlide><img src={logo18} alt="Logo 1" className="logo-img" /></SwiperSlide>
                   <SwiperSlide><img src={logo19} alt="Logo 1" className="logo-img" /></SwiperSlide>
                    <SwiperSlide><img src={logo20} alt="Logo 1" className="logo-img" /></SwiperSlide>
                     <SwiperSlide><img src={logo21} alt="Logo 1" className="logo-img" /></SwiperSlide>
                      <SwiperSlide><img src={logo22} alt="Logo 1" className="logo-img" /></SwiperSlide>

  </Swiper>


    </Container>

   </>
  )
}

export default Home