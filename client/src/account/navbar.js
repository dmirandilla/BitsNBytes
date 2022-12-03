import React, { useState, useEffect } from 'react';
import Logo from './images/logo.jpg'
import { Link } from 'react-router-dom';
import User from './images/user.jpg'

import { AccountContext } from "./Account";
import logo from "../account/images/logo.jpg";
import axios from 'axios';
import logoIcon from './images/logo.jpg';
import Pool from '../UserPool';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';


const NavBar = () => {

  const [userInfo, setUserInfo] = useState({});
  const [nav, setNav] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      const user = Pool.getCurrentUser();
      const username = user.getUsername();

      await axios.get(`https://h0kvzfoszc.execute-api.us-west-1.amazonaws.com/dev/settings?username=${username}`)
        .then(function ({ data }) {
          setUserInfo(data);
        })
        .catch(function (err) {
          console.log("Not able to get userInfo! ERR: ", err);
        });
    }

    getUserInfo();
  }, [])

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className='flex w-full h-[110px] px-48 justify-between items-center px-4 bg-blue-900 text-gray-300'>
        <div>
          <img src={logoIcon} alt='Logo Image' style={{ width: '200px' }} />
        </div>

        {/* menu */}
        <ul className='flex space-x-16 hidden md:flex'>
          {Object.keys(userInfo).map((category, index) => {
            if (userInfo[category] === true) {
              return (
                <li>
                  <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to={`/${category}`} duration={500}>
                    {category}
                  </Link>
                </li>
              );
            }
          })}

          <li>
            <Link to="/userProfile">
              <img className="h-[50px] w-[50px]" src={User} />
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
    </>
  )
}

export default NavBar;
