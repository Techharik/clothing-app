import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import { useContext } from 'react';
import { userContext } from '../../context/user.context';

const Navigation = () => {
 const {currentUser} = useContext(userContext);


  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          {/* <CrwnLogo className='logo' /> */}
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            {currentUser?'Sign Out':"Sign In"}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation