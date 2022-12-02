import { useState, useContext, useEffect } from 'react';
import { AccountContext } from "./Account";
import { Link } from 'react-router-dom';
import logo from "../account/images/logo.jpg";
import User from "./images/user.jpg"
import axios from 'axios';
import Article from './Article';
import logoIcon from './images/logo.jpg';


const Science = () => {

    const [row1, setRow1] = useState([])
    const [newArticles, setNewsArticles] = useState([])

    const [count, setCount] = useState(0)

    function setter() {
        setCount(count + 1)
    }

    useEffect(() => {
      async function getNews() {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e5d03be9ccc9474d84f3813ff00ebf52&category=science`)
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
    }, [count])



return (
    <>
  
        
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
            <Link className="text-2xl border-b-2 border-transparent hover:text-red-800 dark:hover:text-red-200 hover:border-red-500" to='/login'  duration={500}>
              Logout
            </Link>
          </li>

          <li>
            <Link to="/userProfile">
            <img className="h-[50px] w-[50px]" src={User}/>
            </Link>
          </li>
        </ul>
        </div> 

        <div className="flex justify-center px-20 py-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setter()}>
                Refresh this genre!
             </button>
        </div> 

        <div className="flex justify-center grid grid-cols-5 gap-y-40 py-40 px-40">
        {row1.map((o) => (
          <div key={o}> {o} </div>
        ))}
      </div>
        </>
)
}
export default Science;