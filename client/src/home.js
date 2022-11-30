import React, { useContext } from 'react';
import { AccountContext } from "./account/Account";
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();

  const { logout } = useContext(AccountContext);

  const onLogout = () => {
    logout();
    history.go('/login');
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div>
        <button color="secondary" onClick={onLogout}>Logout</button> 
      </div>
    </>
  );
}

export default Home;
