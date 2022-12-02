import React, { useState } from 'react';
import Logo from './images/logo.jpg'
import { Link } from 'react-router-dom';
import User from './images/user.jpg'



const NavBar = () => {
  return (
    <>
    <div class="flex items-center p-6 text-gray-600 capitalize dark:text-gray-300">
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Sports</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Business</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Entertainment</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">General</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Health </Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Science </Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Technology </Link>

        <button>
            <img className="w-[50x] h-[50px]" src={User}/>
        </button> 

    </div>
    </>
  )
}

export default NavBar;
