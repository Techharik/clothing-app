import React from 'react'
import CategoryItem from '../components/category-item/category-item.component';

import '../components/category-item/category-item.styles.scss';

const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Hats',
        },
        {
          id: 2,
          title: 'Jackets',
        },
        {
          id: 3,
          title: 'Sneakers',
        },
        {
          id: 4,
          title: 'Womens',
        },
        {
          id: 5,
          title: 'Mens',
        },
      ];
    
      return (
        <div className='categories-container'>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      );
}

export default Home