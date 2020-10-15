import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Categories, Sort, SandwichBlock } from '../components';

import { setCategory } from '../redux/actions/filters.js';

const categoryNames = [
  'Сэндвичи',
  'Салаты и роллы',
  'Детские наборы',
  'Десерты и напитки'
];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory}
          items={categoryNames} />

        <Sort items={sortItems} />

      </div>
      <h2 className="content__title">Сэндвичи</h2>
      <div className="content__items">
        {
          items && items.map((obj) => (
            <SandwichBlock key={obj.id} {...obj} />
          ))
        }

      </div>
    </div>
  )
}

export default Home
