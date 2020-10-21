import React from 'react'

function Cart() {
  return (

    <div className="container container--cart">

      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <svg className="cart__cart-pic" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450.391 450.391"
              xmlSpace="preserve">
              <g>
                <path d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
C169.796,411.77,158.1,423.465,143.673,423.465z" />
                <path
                  d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z" />
                <path d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z" />
              </g>
            </svg>
            <span>Корзина</span>
          </h2>
          <div className="cart__clear">
            <svg className="cart__clear-pic" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
      Очистить корзину
    </div>
        </div>

        <div className="content__items">

          <div className="cart__item">
            <div className="cart__item-pic">
              <img src="images/sandwich.jpg" alt="" className="sandwich__pic" />
            </div>
            <div className="cart__item-info">
              <h3>Курица и Бекон Мелт</h3>
              <p>белый хлеб, 30 см.</p>
            </div>

            <div className="cart__item-controls">

              <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                  <svg height="10" viewBox="0 -192 469.33333 469" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path className="button-plus-svg"
                      d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
                  </svg>
                </div>
                <b>1</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="button-plus-svg"
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"></path>
                  </svg>
                </div>
              </div>

              <div className="cart__item-price">
                <b>600 ₽</b>
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

          <div className="cart__item">

            <div className="cart__item-pic">
              <img src="images/sandwich.jpg" alt="" className="sandwich__pic" />
            </div>

            <div className="cart__item-info">
              <h3>Бекон Мелт и Курица</h3>
              <p className="cart__item-description">белый хлеб, 30 см.</p>
            </div>

            <div className="cart__item-controls">
              <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                  <svg height="10" viewBox="0 -192 469.33333 469" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path className="button-plus-svg"
                      d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
                  </svg>
                </div>
                <b>1</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="button-plus-svg"
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"></path>
                  </svg>

                </div>
              </div>
              <div className="cart__item-price">
                <b>300 ₽</b>
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

        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-info">
            <span>Всего позиций: <b>2</b></span>
            <span>Сумма заказа: <b>600&nbsp;₽</b></span>
          </div>
          <div className="cart__bottom-checkout">
            <a href="/" className="button button--outline button--back">

              <svg height="13" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52"
                xmlSpace="preserve">
                <g>
                  <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
L143.492,221.863z" />
                </g>
              </svg>
              <span>Вернуться назад</span>
            </a>
            <a className="button button--cart button--width">Оплатить сейчас</a>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Cart
