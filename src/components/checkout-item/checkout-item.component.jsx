import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

const {addItemtoCart,decAndRemoveItem, removeItemToCart} = useContext(CartContext);

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
        <div className='arrow' onClick={()=>decAndRemoveItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={
          ()=>addItemtoCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button'onClick={()=>removeItemToCart(cartItem)} >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;