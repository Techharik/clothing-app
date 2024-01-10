import { useContext } from 'react';

import ProductCard from '../../components/Productcard/productcard.jsx'
import { ProductContext } from '../../context/product.context';

import './shop.styles.scss';

const Shop = () => {
  const { productItem } = useContext(ProductContext);

  return (
    <div className='products-container'>
      {productItem.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;