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
    const [filteredProducts, setFilteredProducts] = useState(ProductsData)

    const handleCategoryChange = (e) =>{
      setSelectedCategory(e.target.value)
    };

    const handlePriceChange = (e) =>{
      setMaxPrice(e.target.value)
    };

    const applyFilter = () =>{
      let updateProducts = ProductsData;
      if(selectedCategory !== "") {
        updateProducts = updateProducts.filter(
          (product) => product.category === selectedCategory
        )
      }
      updateProducts = updateProducts.filter(
        (product) => product.price <= maxPrice 
      )
      setFilteredProducts(updateProducts)
    }
  }
  return (
    <div>
      <div className='p-5'>
        <h1 className='text-xl font-bold'>Filtered Products</h1>
        <label className='block mt-5'> <span>Category:</span> 
        <select value={selectedCategory} onChange={handleCategoryChange} className='block w-full mt-2'/>
        <option value="">All</option>
        <option value='Electronics'>Electronics</option>
        <option value='Books'>Books</option>
        <option value='Clothing'>Clothing</option>
        </label>
        <label className='block mt-5'>
 <span> Max Price : ${maxPrice}</span>
 <input 
 type='range'
 min='0'
 max="1000"
 value={maxPrice}
 onChange={handlePriceChange}
 className='block w-full mt-2'
 />
        </label>
        <button onClick={applyFilter} className='mt-5 bg-blue-500 text-white p-3 rounded'>Filter Now</button>
      </div>

<div >

</div>

    </div>
  );
};

export default ProductFilter;