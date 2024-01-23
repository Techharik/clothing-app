import { useEffect } from 'react';

// import ProductCard from '../../components/Productcard/productcard.jsx'
// import { ProductContext } from '../../context/product.context';
import CategoryPreview from '../../components/category-preview/category-preview.jsx';
import './shop.styles.scss';
import { getCategoriesData } from '../../utilits/firebase.utilits.js';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_ACTIONTYPES } from '../../store/product/product.action.js';
const Shop = () => {
  // const { productItem } = useContext(ProductContext);
  const productItem = useSelector((state)=>state.product.productItem)
  console.log(productItem)
  const dispatch = useDispatch()
  useEffect(()=>{
    const categoryMap = async ()=>{
     const categoriesData =   await getCategoriesData('categories') 
      

       dispatch({
        type: PRODUCT_ACTIONTYPES.ADD_PRDOCUT_CATEGORY,
        payload: categoriesData
       })
    } 
    categoryMap()
   
  },[])
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