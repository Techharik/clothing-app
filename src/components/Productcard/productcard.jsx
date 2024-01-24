import './product_card.styles.scss';
import {  useDispatch } from "react-redux"
import { CART_ACTION_TYPES } from "../../utilits/action.types/cart.action.types"

import Button from '../button/button.component';
// import { CartContext } from '../../context/cart.context';
// import { useContext } from 'react';
import { addItemtoCart } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';



const ProductCard = ({ product }) => {
  const state = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  console.log(state)
 const addItemstoCart = (state,product)=>{
  const newCartItem = addItemtoCart(state.cartItems,product)

  dispatch({
    type:CART_ACTION_TYPES.UPDATE_CART_ITEM,
    payload :newCartItem
  })

 }
  
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'
      onClick={()=>addItemstoCart(state,product)}
      >Add to card</Button>
    </div>
  );
};

export default ProductCard;