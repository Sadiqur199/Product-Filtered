import React, { useState } from 'react';

const ProductFilter = () => {
  const ProductsData = [
    {id:1, name:'Product1', category:'Electronics' , price:50},
    {id:2, name:'Product2', category:'Clothing' , price:100},
    {id:3, name:'Product3', category:'Books' , price:150},
    {id:4, name:'Product4', category:'Clothing' , price:200},
    {id:5, name:'Product5', category:'Electronics' , price:250},
  ];
  const ProductsFilter = () =>{
    const [selectedCategory, setSelectedCategory] = useState("");
    const [maxPrice , setMaxPrice] = useState(1000);
    const [filteredProducts, setFilteredProcuts] = useState(ProductsData)

    const handleCategoryChange = (e) =>{
      setSelectedCategory(e.target.value)
    };

    const handlePriceChange = (e) =>{
      setMaxPrice(e.target.value)
    }
  }
  return (
    <div>
      
    </div>
  );
};

export default ProductFilter;