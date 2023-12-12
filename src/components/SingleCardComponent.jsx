import React from 'react'
import { Link } from 'react-router-dom'

function SingleCardComponent({product}) {
  return (
    <div className='flex flex-col w-[300px] rounded-[20px] border border-mainBlue p-3'>
        <img src={product.thumbnail} alt={product.title} className='w-full h-[200px] object-cover'/>
        <div>
            <h4 className='text-center mt-[20px] font-bold'>{product.title}</h4>
            <p>{product.price}</p>
            <p>{product.description.slice(0, 50)}...</p>
        </div>
        <Link to={`/productDetails/${product.id}`}>
            See More
        </Link>
    </div>
  )
}

export default SingleCardComponent