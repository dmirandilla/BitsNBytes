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
        Home Page
      </h1>

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
