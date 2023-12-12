import React, { useEffect, useState } from 'react'
import CategoryComponent from '../components/CategoryComponent'
import ProductService from '../services/productService'
import SingleCardComponent from '../components/SingleCardComponent';

function ProductPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then(res => setProducts(res.data.products))

      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <CategoryComponent />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 mt-[50px]'>
          {products.map((product) => {
            return <SingleCardComponent product={product} key={product.id}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductPage