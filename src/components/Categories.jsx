import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className={`categories__item ${activeCategory === null ? 'active' : ''}`}
          onClick={() => onClickCategory(null)}
        >Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={`categories__item ${activeCategory === index ? 'active' : ''}`}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]), 
  items: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onClickCategory: PropTypes.func, 
};
Categories.defaultProps = {
  activeCategory: null, 
  items: [], 
};
export default Categories;
