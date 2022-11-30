import React from 'react'
import HomeIcon from './assets/homepageIcon.png'

const Sports = () => {
  return (
    <div className="flex items-center content-center">
    <div className="p=10 bg-white">
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
        Get your news bits all in one bite . . . 
        </h1>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center  bg-[#D90429] hover:bg-[#7e0217]'>
            Login / Register
            <span className='group-hover:rotate-90 duration-300'>
            </span>
          </button>
        </div>
        </div>
        </div>
  <div class="p-20">
  <div> 
            <img src={HomeIcon} alt='Home Image' style={{ width: '200px' }} />
        </div>
  </div>

</div>
  );
};

export default Sports;