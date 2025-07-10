import React,{useState,useEffect}from 'react'
import { getAllPosts } from '../services/postService';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Blog() {
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

  return (
    <>
      <Container className='my-5'>
      
 <Row className='blogcard'>
  {recentBlogs.map((item,index)=>(
        <Col xs={12} md={3} key={index} className=' mt-3'>
          <Card >
      <Card.Img variant="top" src={`http://localhost:5000/blog/${item.banner_image}`}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.meta_description} </Card.Text>
         <Button variant=" blackbutton" id='blackbutton' onClick={()=>handleReadMore(item._id)}>Read more</Button>
      </Card.Body>
    </Card>
        </Col>
         ))}
      </Row>
    </Container>
    </>
  )
}

export default Blog