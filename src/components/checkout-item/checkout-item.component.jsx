import { useContext, useState } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoCart, decItem, removeCartItem } from '../../store/cart/cart.action';
import { CART_ACTION_TYPES } from '../../utilits/action.types/cart.action.types';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector((state)=>state.cart.cartItems)
 const dispatch = useDispatch()
// const { } = useContext(CartContext);


const decAndRemoveItems = (cartItem)=>{
    const value = decItem(cartItems,cartItem)
    dispatch({
      type:CART_ACTION_TYPES.UPDATE_CART_ITEM,
      payload: value
    })
}
const addItemtoCarts = (cartItem)=>{
    const value = addItemtoCart(cartItems,cartItem)
    dispatch({
      type:CART_ACTION_TYPES.UPDATE_CART_ITEM,
      payload: value
    })
}
const removeItemToCarts = (cartItem)=>{
    const value = removeCartItem(cartItems,cartItem)
    dispatch({
      type:CART_ACTION_TYPES.UPDATE_CART_ITEM,
      payload: value
    })
}
//   const clearItemHandler = () => clearItemFromCart(cartItem);
//   const addItemHandler = () => addItemToCart(cartItem);
//   const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>decAndRemoveItems(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={
          ()=>addItemtoCarts(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button'onClick={()=>removeItemToCarts(cartItem)} >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;