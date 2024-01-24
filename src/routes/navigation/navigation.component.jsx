import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {NavigationContainer , LogoContainer , NavLinks , NavLink} from'./navigation.styles.jsx';
import { useContext } from 'react';
import { userContext } from '../../context/user.context';
import { signOutUser } from '../../utilits/firebase.utilits';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';
import { useSelector } from 'react-redux';

const Navigation = () => {
 const {currentUser} = useContext(userContext);

 const isCartOpen = useSelector((state)=>state.cart.isCartOpen)

 const siginOutHandler = async()=>{
  const res = await signOutUser()
 }

  return (
    <>
      <NavigationContainer >
        <LogoContainer className='logo-container' to='/'>
          {/* <CrwnLogo className='logo' /> */}
        </LogoContainer>
        <NavLinks className='nav-links-container'>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          <NavLink className='nav-link' to='/sign-in'>
            {currentUser?
            <NavLink as={'span'}  onClick={siginOutHandler}>
              Sign Out
            </NavLink>
          :
            <NavLink as={'span'} >
              Sign In
            </NavLink>
          }
          </NavLink>
        <CartIcon />
       {isCartOpen &&  <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation