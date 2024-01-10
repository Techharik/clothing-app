import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import { useContext } from 'react';
import { userContext } from '../../context/user.context';
import { signOutUser } from '../../utilits/firebase.utilits';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
 const {currentUser} = useContext(userContext);
 const { isCartOpen} =useContext(CartContext)

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
        <CartIcon />
       {isCartOpen &&  <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation