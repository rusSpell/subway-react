import React from 'react'

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null)
  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className={`categories__item ${activeItem === null ? 'active' : ''}`}
          onClick={() => onSelectItem(null)}
        >Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={`categories__item ${activeItem === index ? 'active' : ''}`}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories;


/* import React, { Component } from 'react'

export default class Categories extends Component {
  state = {
    activeItem: 1,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index
    });
  }

  render() {
    const { items, onClickItem } = this.props;
    return (
      <div className="categories">
        <ul className="categories__list">
          <li className="categories__item">Все</li>
          {
            items.map((name, index) => (
              <li
                onClick={() => this.onSelectItem(index)}
                className={`categories__item ${this.state.activeItem === index ? 'active' : ''}`}
                key={`${name}_${index}`}>{name}</li>
            ))}
        </ul>
      </div>
    )
  }
}
 */