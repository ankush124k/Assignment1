import ProductFrom from '@/components/ProductFrom';
import React from 'react'

const AddProductPage = () => {
  return (
    <div className='flex flex-col justify-evenly items-center pt-5  '>
      <h2 className='font-bold '>Add Product Page</h2>
      <ProductFrom />
    </div>
  )
}

export default AddProductPage;
