import React,  { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService'
import { categoryHandler, currentCategoryHandler } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function CategoryComponent() {

    const [isActive, setIsActive] = useState(false);
    const {category} = useSelector(state => state.productStore);
    const dispatch = useDispatch();

    useEffect(() => {
        CategoryService.getAllCategory
            .then(res => dispatch(categoryHandler(res.data)))
            .catch(err => console.log(err))
    }, [])

    function showCategoryHandler(){
        setIsActive(!isActive);
    }

    function handleCategory(cat) {
        dispatch(currentCategoryHandler(cat))
    }
    
    return (
        <div className='bg-gray-400 py-[20px]'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-[30px] justify-center items-center'> 
                <button className='px-[24px] py-[12px] bg-mainBlue text-mainYellow rounded-lg'
                onClick={showCategoryHandler}>Category</button>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full place-items-center'>
                    {isActive && category.map((cat, index) => {
                        return <li key={index} 
                                    className='bg-blue-400 px-[16px] py-[8px] rounded-lg w-[250px] hover:bg-blue-800 hover:text-white transition-all ease-in cursor-pointer'
                                    onClick={() => handleCategory(cat)}>{cat}</li> 
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CategoryComponent