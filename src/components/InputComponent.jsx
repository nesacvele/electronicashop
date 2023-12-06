import React from 'react'

function InputComponent() {
  return (
    <div className='bg-white rounded-[20px] overflow-hidden justify-between hidden  md:flex'>
        <input type="text" placeholder='Search Product...' className='pl-[24px] py-[12px]' />
        <button className='bg-mainYellow text-white px-[40px] rounded-[20px]'>Search</button>
    </div>
  )
}

export default InputComponent