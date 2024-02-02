import { useEffect } from 'react';
// import ProductCard from '../../components/Productcard/productcard.jsx'
// import { ProductContext } from '../../context/product.context';
import CategoryPreview from '../../components/category-preview/category-preview.jsx';
import './shop.styles.scss';
import { getCategoriesData } from '../../utilits/firebase.utilits.js';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategory } from '../../utilits/ftech.cat.js';
const Shop = () => {
  // const { productItem } = useContext(ProductContext);
const {productItem , isLoading ,error} = useSelector((state)=>state.product)
  
  // console.log(productItem)

  const dispatch = useDispatch()


  // console.log('1') 

  useEffect(()=>{
    // const categoryMap = async ()=>{

    //  const categoriesData =   await getCategoriesData('categories') 
    
    //    dispatch({
    //     type: PRODUCT_ACTIONTYPES.ADD_PRDOCUT_CATEGORY,
    //     payload: categoriesData
    //    })
    // } 
    // categoryMap()
    dispatch(fetchCategory())
   
    
    // fetchApi()
  },[])
  return (
    <div className='shop-container'>

      {
   isLoading ? <p>Loading</p>
   : Object.keys(productItem).map((key) => {
    const products = productItem[key];
    return <CategoryPreview key={key} title={key} products={products} />;
     })
      }
      
    </div>
  );
};

export default Shop;