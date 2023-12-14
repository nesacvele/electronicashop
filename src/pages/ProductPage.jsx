import React, { useEffect } from 'react'
import CategoryComponent from '../components/CategoryComponent'
import ProductService from '../services/productService'
import SingleCardComponent from '../components/SingleCardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { currentCategoryHandler, productHandler } from '../store/productSlice';

function ProductPage() {

  const {products, currentCategory} = useSelector(state =>state.productStore)
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProducts(currentCategory)
      .then(res =>  dispatch(productHandler(res.data.products)))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    ProductService.getProductByCategory(currentCategory)
      .then(res => {
        dispatch(productHandler(res.data.products))
      })
      .catch(err => console.log(err))
  }, [currentCategory])
  

  return (
    <div>
      <CategoryComponent />
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 mt-[50px]'>
          {products.map(product => {
              return <SingleCardComponent key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductPage