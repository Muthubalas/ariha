import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import { getAllProducts } from '../../services/postService';



function ShopPage() {
  const [filters, setFilters] = useState({
    category: '',
    availability: '',
    priceRange: [0, 5000],
  });
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
    useEffect(() => {
    getAllProducts()
      .then((res) => {
        console.log("products=>",res.data);
        const uniqueCategories = [...new Set(res.data.map(p => p.category))];
        setAllProducts(res.data);
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);
  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = filters.category ? product.category === filters.category : true;
    const matchAvailability =
      filters.availability === 'in'
        ? product.stock > 0
        : filters.availability === 'out'
        ? product.stock === 0
        : true;
    const matchPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return matchCategory && matchAvailability && matchPrice;
  });
console.log("Filters =>", filters);
console.log("All Products =>", allProducts);
console.log("Filtered Products =>", filteredProducts);
  return (
    <div className="container-fluid shopcontainer">
      <div className="row">
        <div className="col-md-3 ">
          <Sidebar filters={filters} setFilters={setFilters} categories={categories} />
        </div>
        <div className="col-md-9">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
