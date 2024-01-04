import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import { useContext } from 'react';
import { userContext } from '../../context/user.context';
import { signOutUser } from '../../utilits/firebase.utilits';

const Navigation = () => {
 const {currentUser} = useContext(userContext);

 const siginOutHandler = async()=>{
  const res = await signOutUser()
 }

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
            {currentUser?
            <span className="nav-link" onClick={siginOutHandler}>
              Sign Out
            </span>
          :
            <span className="nav-link">
              Sign In
            </span>
          }
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation