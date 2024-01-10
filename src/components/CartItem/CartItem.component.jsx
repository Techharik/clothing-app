import './cartItem.styles.scss';

const CartItem = ( {item} ) => {
 console.log(item)
  const { title, imageUrl, price, quantity } = item;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${title}`} />
      <div className='item-details'>
        <span className='name'>{title}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;