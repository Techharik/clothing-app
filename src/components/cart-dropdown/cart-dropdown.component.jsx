import React, { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../CartItem/CartItem.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartReducers } from '../../store/cart/cart.action.types';

const CartDropdown = () => {
// const {cartItem}  = useContext(CartContext)
const cartItem = useSelector(selectCartReducers)
console.log(cartItem)

  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items' >
    {cartItem?.cartItems.map((item)=><CartItem item={item} 
    key={item.id}
    />)
    }
   </div>
    <Button>
      <Link to='/checkout'>
      GO TO CHECKOUT
      </Link>
      </Button>
  </div>
  )
  };

export default CartDropdown;