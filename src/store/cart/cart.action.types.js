import { createSelector } from 'reselect';

export const selectCartReducers = state => state.cart;

export const selectCartTotal = createSelector(
  [selectCartReducers], 
  (cart) =>
  cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector(
  [selectCartReducers],
   (cart) =>
cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);