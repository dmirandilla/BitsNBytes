import React, { useState } from 'react';
import Logo from './assets/logo.png'

const HomeNav = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#BDC6D1] text-black'>
        <div> 
            <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
        </div>

    </div>
  )
}

export default HomeNav