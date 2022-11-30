import React, { useState } from 'react';
import Logo from './assets/logo.png'
import {
    FaRegUserCircle
  } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#BDC6D1] text-black'>
        <div> 
            <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
        </div>

        {/* menu */}
        <div>
            <ul className = 'flex'>
                <li> Sports </li>
                <li> Finance </li>
                <li> Health </li>
                <li> Memes </li>
                <li> 
                    <FaRegUserCircle size={28}/>
                </li>
            </ul>
        </div>
       
    
    </div>
  )
}

export default NavBar