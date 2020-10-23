import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, SandwichBlock, PreLoader } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters.js';
import { fetchProducts } from '../redux/actions/products.js';
import { addProductsToCart } from '../redux/actions/cart.js';
import cart from '../redux/reducers/cart';

const categoryNames = [
  'Сэндвичи',
  'Салаты и роллы',
  'Детские наборы',
  'Десерты и напитки'
];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters)


  React.useEffect(() => {
    dispatch(fetchProducts(category, sortBy))
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddProductsToCart = obj => {
    dispatch(addProductsToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />

        <Sort
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />

      </div>
      <h2 className="content__title">Сэндвичи</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
              <SandwichBlock
                onClickAddProducts={handleAddProductsToCart}
                key={obj.id} 
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj} 
              />
            ))
            : [0, 0, 0].map((_, index) => <PreLoader key={index} />)
        }

      </div>
    </div>
  )
}

export default Home
