import React, { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../CartItem/CartItem.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';

const CartDropdown = () => {
const {cartItem}  = useContext(CartContext)
console.log(cartItem)

  return (
    <div className='cart-dropdown-container'>
    <div className='cart-items' >
    {cartItem?.map((item)=><CartItem item={item} 
    key={item.id}
    />)
    }
   </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
  )
  };

export default CartDropdown;