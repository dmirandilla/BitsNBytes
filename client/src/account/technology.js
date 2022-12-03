import { useState, useContext, useEffect } from 'react';
import { AccountContext } from "./Account";
import { Link } from 'react-router-dom';
import logo from "../account/images/logo.jpg";
import User from "./images/user.jpg"
import axios from 'axios';
import Article from './Article';
import logoIcon from './images/logo.jpg';

import NavBar from './navbar';


const Technology = () => {

  const [row1, setRow1] = useState([])
  const [newArticles, setNewsArticles] = useState([])

  const [count, setCount] = useState(0)

  function setter() {
    setCount(count + 1)
  }

  useEffect(() => {
    async function getNews() {
      await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e5d03be9ccc9474d84f3813ff00ebf52&category=technology`)
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
        <NavBar />
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
export default Technology;