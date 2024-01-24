import { useContext } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import { CartContext } from '../../context/cart.context';

import './cart-item.styles.scss';
import { CART_ACTION_TYPES } from '../../utilits/action.types/cart.action.types';
import { useDispatch } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.action.types';
const CartIcon = () => {
  const dispatch = useDispatch()
  
  // const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const toggleIsCartOpen = () => dispatch({
    type: CART_ACTION_TYPES.IS_CART_OPEN
  });

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      {/* <ShoppingIcon className='shopping-icon' /> */}
      <span className='item-count'>{selectCartCount}</span>
    </div>
  );
};

export default CartIcon;