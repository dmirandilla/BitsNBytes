import React, { useContext } from 'react';
import { AccountContext } from "./account/Account";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  let history = useHistory();

  const { logout } = useContext(AccountContext);

  const onLogout = () => {
    logout();
    history.go('/login');
  }

  return (
    <>
      <div name='home' className='w-full h-screen bg-[#ffffff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
        Get your news bits all in one bite . . . 
      
        </h1>
        <div>
            <Link to='/login' className='text-white group border-2 px-6 py-3 my-2 flex items-center  bg-[#D90429] hover:bg-[#7e0217]'>
                Login / Register
            <span className='group-hover:rotate-90 duration-300'>
            </span>
            </Link>
         
        </div>
      </div>
    </div>

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
    </>
  );
}

export default Home;
