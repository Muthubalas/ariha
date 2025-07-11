import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPosts } from '../services/postService';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import { getSinglePost } from '../services/postService';
import { useNavigate } from 'react-router-dom';

function BlogDetail() {
  const {id}=useParams();
  const[blog,setBlog]=useState(null);
  useEffect(()=>{
    getSinglePost(id)
    .then(res=>{
console.log("getSinglePost======>",res.data);

      setBlog(res.data);
    })
    .catch(err=>{
      console.error(err)})
  },[id])

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
    if (!blog) return <p>Loading blog...</p>;
  return (
    <>
      <div className='blogcontainer'>
     <Container className='pt-5'>
        <img src={`http://localhost:5000${blog.banner_image}`} alt="banner" style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }} />
  <h1 className='pb-3 pt-5'>{blog.title}</h1>
   <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </Container>
    </div>

     <Container className='my-5 blogcontainer'>
      
 <Row className='blogcard'>
  {recentBlogs.map((item,index)=>(
        <Col xs={12} md={3} key={index} className=' mt-3'>
          <Card >
      <Card.Img variant="top" src={`http://localhost:5000${item.banner_image}`}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.meta_description} </Card.Text>
         <Button className="read ps-0" onClick={() => handleReadMore(item._id)}>
          Read more → 
        </Button>
      </Card.Body>
    </Card>
        </Col>
         ))}
      </Row>
    </Container>
    </>
  )
}

export default BlogDetail