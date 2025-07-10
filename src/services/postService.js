import api from '../api/axiosInstance';
export const getAllPosts = () => api.get('/blogs');      
export const getAllProducts = () => api.get('/products');    
export const getSingleProduct = id=>api.get(`/products/${id}`)  
export const getSinglePost = id => api.get(`/blogs/${id}`);