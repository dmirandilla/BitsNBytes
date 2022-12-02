import React, { useState } from 'react';
import Logo from './images/logo.jpg'
import { Link } from 'react-router-dom';
import User from './images/user.jpg'


// const options = {
//     method: 'GET',
//     url: 'https://newsapi.org/v2/everything?q=keyword&apiKey=50cb523214d247d8bbef954361ffe664',
//     params: {locale: 'en_US', hotel_id: hotelAPIId, page_number: '1'},
//     headers: {
//       'X-Api-Key': 'ddc2e763aamsh13fde66cae00ad8p1a6c1cjsnd2013a5657da',
//       'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
//     }
//   };

//   let request = await axios.request(options)
//   const data = request.data;

//   //console.log("Data: ", data);
//   res.json(data);

// axios -> 3rd party

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
