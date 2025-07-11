import React from 'react'
import '../assets/css/home.css';
import {Container,Row,Col} from 'react-bootstrap';
import aboutlogo from '../assets/images/aboutlogo.webp';
import fssaiLogo from '../assets/images/aboutlogo.webp';
import {
  FaCheckCircle,
  FaHeart,
  FaLeaf,
  FaClock,
  FaFlask,         // ✅ This was missing
  FaVial,
} from 'react-icons/fa';

function About() {
  const features = [
  {
    icon: <img src={fssaiLogo} alt="FSSAI" style={{ width: 24, height: 24 }} />,
    label: 'FSSAI Certified Facility',
  },
  {
    icon: <FaFlask className="text-danger fs-5" />,
    label: 'No artificial colors or flavors',
  },
  {
    icon: <FaLeaf className="text-success fs-5" />,
    label: '100% vegetarian ingredients',
  },
  {
    icon: <FaVial className="text-info fs-5" />,
    label: 'Technology-led Preservation',
  },
  {
    icon: <FaClock className="text-danger fs-5" />,
    label: 'Long Shelf-Life (Up to 30 Days & 9 Months)',
  },
  {
    icon: <FaHeart className="text-danger fs-5" />,
    label: 'Gut-Friendly, Diabetic-Safe Formulations',
  },
];
  return (
    <>
    <Container className='aboutbanner'>
        <Row>
              <Col xs={12} md={6}>
              <img src={aboutlogo} alt="logo" width='100%' height='90%'/>
             </Col>
            <Col xs={12} md={6}>
<h2  className='pb-3 fw-semibold'>Science-Backed. Technology-Driven</h2>
<p className='paracolor' >We aren’t just bakers—we’re innovators.
Ariha Foods operates with three applied patents, including:</p>
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
    <span className="fs-5 paracolor parafont">Freshly Baked Everyday</span>
  </div>
</li>
</ul>
  </Col>
   </Row>
    </Container>



      <Container className="py-5 bg-white">
        <h2 className="text-center fw-bold mb-5">Why Ariha is Different</h2>
        <Row className="justify-content-center mb-4 g-4">
          {features.slice(0, 3).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <div
                className="position-relative rounded-4 border shadow-sm p-3 d-flex align-items-center gap-3 bg-white w-100"
                style={{
                  maxWidth: "300px",
                  minHeight: "90px",
                }}
              >
                {item.icon}
                <span className="fw-semibold">{item.label}</span>
                <FaCheckCircle
                  className="text-success position-absolute"
                  style={{ top: 10, right: 10 }}
                />
              </div>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mb-4 g-4">
          {features.slice(3, 5).map((item, index) => (
            <Col key={index} xs={12} sm={6} md={5} className="d-flex justify-content-center">
              <div
                className="position-relative rounded-4 border shadow-sm p-3 d-flex align-items-center gap-3 bg-white w-100"
                style={{
                  maxWidth: "380px",
                  minHeight: "90px",
                }}
              >
                {item.icon}
                <span className="fw-semibold">{item.label}</span>
                <FaCheckCircle
                  className="text-success position-absolute"
                  style={{ top: 10, right: 10 }}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} className="d-flex justify-content-center">
            <div
              className="position-relative rounded-4 border shadow-sm p-3 d-flex align-items-center gap-3 bg-white w-100"
              style={{
                maxWidth: "480px",
                minHeight: "90px",
              }}
            >
              {features[5].icon}
              <span className="fw-semibold">{features[5].label}</span>
              <FaCheckCircle
                className="text-success position-absolute"
                style={{ top: 10, right: 10 }}
              />
            </div>
          </Col>
        </Row>
      </Container>


      <Container className="my-5">
      <Row className="align-items-stretch mb-5">
        <Col md={3} xs={12} className="mb-3 mb-md-0 d-flex justify-content-center">
          <div className="w-100 h-100">
            <img
              src={fssaiLogo}
              alt="Amit Vaishnav"
              className="img-fluid rounded shadow w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
        </Col>
        <Col md={9} xs={12}>
          <h3 className="fw-bold mb-3">About Ariha Foods</h3>
          <p>
            Incorporated in March 2024, <strong>Arihafoods Private Limited</strong> thrives on the legacy
            of its founders and a small, women-led team behind the scenes. The company is driven by the purpose
            of revolutionizing everyday eating with smarter, gut-friendly, and longer-lasting baked goods.
            The company has three technology process patents (applied) which are used as the basis of the
            innovation. The patent “Low glycemic index formulation process” is used to formulate the product,
            keeping the water activity under control using the patent “Ultra-low water activity.”
          </p>
          <p className="mt-4">
            <strong>Mr. Amit Vaishnav (Co-founder CEO)</strong>, is an engineer by education but a foodie by choice.
            He was part of the first team that brought ONIDA TVs to the market. Armed with passion for all things food,
            he has over 38 years of experience in the processed foods industry. His deep product knowledge and
            commitment to innovation drive the brand's mission: to create food that not only tastes good but
            feels good and does good for your body.
          </p>
        </Col>
      </Row>

      <Row className="align-items-stretch">
        <Col md={3} xs={12} className="mb-3 mb-md-0 d-flex justify-content-center">
          <div className="w-100 h-100">
            <img
              src={fssaiLogo}
              alt="Farah Dharam Sheth"
              className="img-fluid rounded shadow w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
        </Col>
        <Col md={9} xs={12}>
          <p className="mt-3">
            <strong>Farah Dharam Sheth (Co-founder)</strong> with over 15 years of experience in marketing and advertising,
            Farah Sheth brings strategic insight and creative flair to Arihafoods. A passionate freelance copywriter,
            Farah has a keen understanding of consumer behavior and market dynamics. Her global exposure working with
            Nippon Paint as a part of the initial marketing team adds depth to her approach in connecting brands with
            audiences meaningfully.
          </p>
        </Col>
      </Row>
    </Container>

   </>
  )
}

export default About;