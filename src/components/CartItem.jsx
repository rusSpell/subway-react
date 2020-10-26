import React from 'react'

function CartItem({ name, type, size, description, totalPrice, totalCount }) {
  return (
    <div className="cart__item">
      <div className="cart__item-pic">
        <img src="images/sandwich.jpg" alt="" className="sandwich__pic" />
      </div>
      <div className="cart__item-info">
        <h3>{ name }</h3>
        {
          type && size ? <p>{ type }, { size } см.</p> : ''
        }
        
        <p className="cart__item-description">{ description }</p>
      </div>
      <div className="cart__item-controls">
        <div className="cart__item-count">
          <div className="button button--outline button--circle cart__item-count-minus">
            <svg height="10" viewBox="0 -192 469.33333 469" width="10" xmlns="http://www.w3.org/2000/svg">
              <path className="button-plus-svg"
                d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
            </svg>
          </div>
          <b>{ totalCount }</b>
          <div className="button button--outline button--circle cart__item-count-plus">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="button-plus-svg"
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"></path>
            </svg>
          </div>
        </div>
        <div className="cart__item-price">
          <b>{ totalPrice } ₽</b>
        </div>
        <div className="cart__item-remove">
          <div className="button button--outline button--circle cart__item-count-rotate">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="button-plus-svg"
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

