import { createSelector } from 'reselect';

export const selectCartTotal = createSelector([(state => state.cart.cartItems)], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartCount = createSelector([(state => state.cart.cartItems)], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);