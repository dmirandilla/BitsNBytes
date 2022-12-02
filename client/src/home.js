import React, { useContext } from 'react';
import { AccountContext } from "./account/Account";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoIcon from './account/images/logo.jpg';

function Home() {
  let history = useHistory();

  const { logout } = useContext(AccountContext);

  const onLogout = () => {
    logout();
    history.go('/login');
  }

  return (
    <>
      <div className='heading py-16 px-16'>
        <img className="w-[300px] h-[300p]" src={logoIcon} />
        {/* <div className='heading-text'>
					<h1 className="px-4">-iconhere-</h1>
					<h1>Hello username</h1>    
				</div> */}
      </div>

      <div name='home' className='w-full h-screen bg-[#ffffff] pb-80'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
            Get your news bits all in one bite . . .
          </h1>
          
          <div>
            <Link to='/login'>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center  bg-[#D90429] hover:bg-[#7e0217]'>
              Login / Register
              <span className='group-hover:rotate-90 duration-300'>
              </span>
            </button>
            </Link>

          </div>
        </div>
      </div>

    

    </>
  );
}

export default Home;
