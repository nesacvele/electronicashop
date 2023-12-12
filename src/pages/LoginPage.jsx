import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import UserService from '../services/userService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loggedUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const formik = useFormik({
      initialValues: {
        username: '',
        password: ''
      },
      // validation
      validationSchema: Yup.object({
        username: Yup.string().required('You must provide a username!'),
        password: Yup.string().required('You must provide a password!')
      }),

      onSubmit: (values) => {
        UserService.loggedIn(values)
          .then(res => {
            if(res.status === 200){
              toast.success('User successfuly logged in!')
              // res.data je jedan user
              dispatch(loggedUser(res.data));
              setTimeout(() => navigation('/'), 2000);
            }else {
              toast.error('invalid username or password!')
            }
          })
          .catch(err => {
            toast.error(err.response.data.message)
          })

        formik.resetForm();
      }
  })

  const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div>
      <h2 className='text-2xl text-center my-[50px] text-mainBlue font-bold uppercase'>Login Form</h2>

      <form onSubmit={formik.handleSubmit} className='w-[40%] rounded-[20px] border border-mainBlue p-5 mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col mb-4'>
          <label className='mb-1 text-[15px] text-textGray'>Username
          <span className='text-[13px] text-red-600'>{showError('username')}</span>
          </label>
          <input className='text-grayLight border border-mainBlue px-[8px] py-[4px] rounded-md' 
          type="text" 
          placeholder='Insert Username' 
          onChange= {formik.handleChange} 
          name='username' 
          value={formik.values.username} />
        </div>
        <div className='flex flex-col mb-4'>  
          <label className='mb-1 text-[15px] text-textGray'>Password
          <span className='text-[13px] text-red-600'>{showError('password')}</span>
          </label>
          <input className='text-grayLight border border-mainBlue px-[8px] py-[4px] rounded-md' 
          type="password" 
          placeholder='Insert Password' 
          onChange= {formik.handleChange} 
          name='password' 
          value={formik.values.password} />
        </div>
        <button type='submit' className='bg-mainYellow text-white px-[32px] py-[8px] rounded-xl'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage