import React, { useState } from 'react';

const ProductsData = [
  {id:1, name:'Product1', category:'Electronics' , price:50},
  {id:2, name:'Product2', category:'Clothing' , price:100},
  {id:3, name:'Product3', category:'Books' , price:150},
  {id:4, name:'Product4', category:'Clothing' , price:200},
  {id:5, name:'Product5', category:'Electronics' , price:250},
];

const ProductFilter = () => {
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
  
  return (
    <div className='border border-gray-400 shadow-lg p-5 m-10 rounded-md'>
      <div className='p-5 '>
        <h1 className='text-xl font-bold text-center'>Filtered Products</h1>
        <label className='block md:w-[50%] mx-auto mt-5 border border-gray-300 p-5 rounded'> <span>Category:</span> 
        <select value={selectedCategory} onChange={handleCategoryChange} className='block w-full mt-2 border p-3'>
        <option value="">All</option>
        <option value='Electronics'>Electronics</option>
        <option value='Books'>Books</option>
        <option value='Clothing'>Clothing</option>
        </select>
        </label>
        <label className='block mt-5 md:w-[50%] mx-auto'>
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
        <button onClick={applyFilter} className='mt-5 md:ml-[50%] ml-0 bg-blue-500 text-white p-3 rounded'>Filter Now</button>
      </div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
{
  filteredProducts.length>0?(
    filteredProducts.map((product)=>(
      <div key={product.id} className='p-5 border rounded'>
        <h2 className='text-lg font-bold'>{product.name}</h2>
        <p>Category:{product.category}</p>
        <p>Price:${product.price}</p>
      </div>
    ))
  ):(
    <p>Product Not Found</p>
  )
}
</div>

    </div>
  );
};

export default ProductFilter;