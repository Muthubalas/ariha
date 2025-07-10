import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPosts } from '../services/postService';
import { Container } from 'react-bootstrap';
import { getSinglePost } from '../services/postService';


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
    if (!blog) return <p>Loading blog...</p>;
  return (
    <>
      <div className='pb-5'>
    
      <img src={`http://localhost:5000/blog/${blog.banner_image}`} alt="banner" style={{ width: '100%', maxHeight: '800px', objectFit: 'cover' }} />
      <Container>
  <h1 className='py-3'>{blog.title}</h1>
   <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </Container>
    </div>
    </>
  )
}

export default BlogDetail