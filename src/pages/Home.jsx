import React from 'react'
import { Categories, Sort, SandwichBlock } from '../components';
function Home({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(name) => console.log(name)} items={[
          'Сэндвичи',
          'Салаты и роллы',
          'Детские наборы',
          'Десерты и напитки'
        ]} />

        <Sort items={[
          { name: 'популярности', type: 'popular' }, 
          { name: 'цене', type: 'price' }, 
          { name: 'алфавиту', type: 'alphabet' }
        ]} />

      </div>
      <h2 className="content__title">Сэндвичи</h2>
      <div className="content__items">
        {
          items.map((obj) => (
            <SandwichBlock key={obj.id} {...obj} />
          ))
        }

      </div>
    </div>
  )
}

export default Home
