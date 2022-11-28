import './userProfile.css'
import React from 'react';

// import HomeIcon from './house.png';
// import PersonIcon from './person.png';
// import { ReactComponent as EllipseIcon } from './ellipse.png';

function userProfile() {
  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>

        <div className='heading' style={{ backgroundColor: '#E5E5E5' }}>
            <div className='heading-text'>
                <h1>-iconhere-</h1>
                <h1>Hello FirstName</h1>    
            </div>
        </div>

        {/* <div className='vertical-divider'/> */}

        <div className='row'>
            <div className='column'>
                <div className='information'>
                    <h3>First Name: firstName</h3>
                    <h3>Last Name: lastName</h3>
                    <h3>Email: email</h3>
                    <h3>Password: ****</h3>
                    <button>Edit Information</button>
                </div>
            </div>
            
            <div className='column'>
                <h3>Current Newsletter Subscriptions:</h3>
            </div>
        </div>
    </>
  );
}

export default userProfile;