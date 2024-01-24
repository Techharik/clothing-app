import React, { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../CartItem/CartItem.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

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
    <Button>
      <Link to='/checkout'>
      GO TO CHECKOUT
      </Link>
      </Button>
  </div>
  )
  };

export default CartDropdown;