import { useFormik } from 'formik'
import React from 'react'

function LoginPage() {

  const formik = useFormik({
      initialValues: {

      },
      // validation

      onSubmit: (values) => {
        console.log(values)
      }
  })

  return (
    <div>
      <h2 className='text-2xl text-center my-[50px] text-mainBlue font-bold uppercase'>Login Form</h2>

      <form onSubmit={formik.handleSubmit} className='w-[40%] rounded-[20px] border border-mainBlue p-5 mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col mb-4'>
          <label className='mb-1 text-[15px] text-textGray'>User Name</label>
          <input className='text-grayLight border border-mainBlue px-[8px] py-[4px] rounded-md' type="text" placeholder='Insert Username'/>
        </div>
        <div className='flex flex-col mb-4'>  
          <label className='mb-1 text-[15px] text-textGray'>Password</label>
          <input className='text-grayLight border border-mainBlue px-[8px] py-[4px] rounded-md' type="text" placeholder='Insert Password'/>
        </div>
        <button className='bg-mainYellow text-white px-[32px] py-[8px] rounded-xl'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage