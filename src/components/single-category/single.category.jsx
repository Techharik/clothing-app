import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../Productcard/productcard';

import { ProductContext } from '../../context/product.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { productItem } = useContext(ProductContext);
  const [products, setProducts] = useState(productItem[category]);
  console.log(category)
  useEffect(() => {
    setProducts(productItem[category]);
  }, [category, productItem]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;