import { useState, useContext, useEffect } from 'react';
import { AccountContext } from "./Account";
import { Link } from 'react-router-dom';
import logo from "../account/images/logo.jpg";
import User from "./images/user.jpg"
import axios from 'axios';
import Article from './Article';
import logoIcon from './images/logo.jpg';


import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';


const LoggedIn = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useContext(AccountContext);
  const [newArticles, setNewsArticles] = useState([])
  

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [row1, setRow1] = useState([])


  useEffect(() => {
    async function getNews() {
      await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e5d03be9ccc9474d84f3813ff00ebf52&category=business`)
        .then(res => {
          const newsArticle = res.data.articles;
          setNewsArticles(newsArticle);
        })
    }

    function display() {
      for (var i = 0; i < newArticles.length; i++) {
        row1.push(<Article sourceName={newArticles[i].source.name || ""} title={newArticles[i].title} description={newArticles[i].description} image={newArticles[i].urlToImage} date={newArticles[i].publishedAt} />
        )
      }
    }
    getNews();
    display()

    console.log(row1)
  }, [newArticles])


  return (
    <div>

      {/* LOGO TOP LEFT */}


      {/* ============================================================================================================ */}
      {/* <div class="heading flex justify-start text-gray-600 capitalize dark:text-gray-300 pt-16 pl-24">
        <Link className="flex"> <img className="w-[300px] h-[300p px-20" src={logoIcon} /> </Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Sports</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Business</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Entertainment</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">General</Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Health </Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Science </Link>
        <Link to="#" class="text-3xl border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-red-500 mx-1.5 sm:mx-6">Technology </Link>
        
        <div className="flex justify-self-end"> 
        <a 
          className="inline-block rounded-lg pl-5 pr-2 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          href="/login"
          onClick={() => logout()}
        >
          Logout
          <span className="text-gray-400" aria-hidden="true">
            &rarr;
          </span>
        </a>

        <button className="px-1">
          <img className="w-[50x] h-[50px]" src={User} />
        </button>
        </div>

      </div> */}


      <div className='flex w-full h-[110px] px-48 justify-between items-center px-4 bg-blue-900 text-gray-300'>
        <div>
          <img src={logoIcon} alt='Logo Image' style={{ width: '200px' }} />
        </div>

        {/* menu */}
        <ul className='flex space-x-16 hidden md:flex'>
          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/business'  duration={500}>
              Business
            </Link>
          </li>
          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/entertainment'  duration={500}>
              Entertainment
            </Link>
          </li>
          
          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/health'  duration={500}>
              Health
            </Link>
          </li>
          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/science'  duration={500}>
              Science
            </Link>
          </li>

          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/sports'  duration={500}>
              Sports
            </Link>
          </li>

          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/technology'  duration={500}>
              Technology
            </Link>
          </li>

          <li>
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/login' onClick={() => logout()}  duration={500}>
              Logout
            </Link>
          </li>

          <li>
            <Link to="/userProfile">
            <img className="h-[50px] w-[50px]" src={User}/>
            </Link>
          </li>

        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

      </div>
      {/* Social icons */}



      <div className="flex justify-center grid grid-cols-5 gap-y-40 py-40 px-40">
        {row1.map((o) => (
          <div key={o}> {o} </div>
        ))}
      </div>



      {/* Main */}
      {/* <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    You are already logged in!
                </h1>

                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    href="/login"
                    onClick={() => logout()}
                  >
                    Logout
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </main> */}


    </div>
  )
}

export default LoggedIn;

