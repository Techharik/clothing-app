import { useContext } from 'react';

import ProductCard from '../../components/Productcard/productcard.jsx'
import { ProductContext } from '../../context/product.context';
import CategoryPreview from '../../components/category-preview/category-preview.jsx';
import './shop.styles.scss';

const Shop = () => {
  const { productItem } = useContext(ProductContext);

  return (
    <div className='shop-container'>
      {Object.keys(productItem).map((key) => {
        const products = productItem[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;