import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import ShopPage from './pages/ShopPage/ShopPage';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { CartProvider } from './pages/context/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  
  return (
    <Router>
    <Header />
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/shop" element={<ShopPage/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/blogs/:id" element={<BlogDetail/>}/>
<Route path="/cart" element={<CartProvider/>}/>
<Route path="/product/:id" element={<ProductDetail/>}/>
    </Routes>
     <Footer />
  </Router>
     
  )
}

export default App
