import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/electon-logo.png';
import InputComponent from './InputComponent';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function NavbarComponent() {

  const {user} = useSelector((state) => state.userStore);
  // console.log(user);

  return (
    <div className='bg-mainBlue h-[100px]'>
        <div className="container mx-auto h-full flex justify-between items-center text-white">
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <InputComponent />
            <div className='flex gap-4'>
              {
                localStorage.hasOwnProperty('elUser') ? 
                <div>
                  <Link to='/profile'>
                    <img src={user.image} alt="user-img" className='w-[50px] rounded-full border border-mainYellow object-cover' />
                  </Link>
                </div> :
                <Link to='/login' className='flex items-center gap-2'>
                < FaUser className='text-xl'/>
                <span>Sing In</span>  
                </Link>
              }
              <Link to='/favorite' className='flex items-center gap-2'>
                < FaHeart className='text-xl'/>
                <span className='text-white bg-mainYellow w-[20px] h-[20px] rounded-full flex items-center justify-center'>0</span>  
                <span>Favorite</span>  
              </Link>
              <Link to='/cart' className='flex items-center gap-2'>
                < FaShoppingCart className='text-xl'/>
                <span className='text-white bg-mainYellow w-[20px] h-[20px] rounded-full flex items-center justify-center'>0</span>  
                <span>Cart</span>  
              </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent