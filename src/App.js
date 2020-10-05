import React from 'react';

import logo from './assets/images/logo.svg';
import sandwich from './assets/images/sandwich.jpg';

/* import './App.css'; */

function App() {
  return (
    
  <div className="wrapper">
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <div className="header__logo">
          <a href="./" className="header__link"><img src={logo} alt="Subway" /></a>
        </div>
        <div className="header__cart">
          <a href="./cart.html" className="button button--cart">
            
            <span className="header__cart-price">600 ₽</span>
            <svg className="header__cart-pic" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450.391 450.391"
             xmlSpace="preserve">
              <g>
                <g>
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
                </g>
              </g>
            </svg>
            <span className="header__cart-count">2</span>
            
          </a>
        </div>
      </div>
    </div>
  </header>
  <div className="content">
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <ul className="categories__list">
            <li className="categories__item">Все</li>
            <li className="categories__item active">Сэндвичи</li>
            <li className="categories__item">Салаты и роллы</li>
            <li className="categories__item">Детские наборы</li>
            <li className="categories__item">Десерты и напитки</li>
          </ul>
        </div>

        <div className="sort">
          <div className="sort__label">
            <svg className="sort__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"></path>
            </svg>
            <b>Сортировка по:</b>
            <span className="sort__item">популярности</span>
          </div>
          <div className="sort__popup">
            <ul>
              <li className="active">популярности</li>
              <li>цене</li>
              <li>алфавиту</li>
            </ul>

          </div>
        </div>
      </div>
      <h2 className="content__title">Сэндвичи</h2>
      <div className="content__items">
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" /> 
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
        <div className="sandwich">
          <img src={sandwich} alt="" className="sandwich__pic" />
          <h4 className="sandwich__title">Курица и Бекон Мелт</h4>
          <div className="sandwich__selector">
            <ul className="sandwich__size">
              <li className="sandwich__size-item">15 см.</li>
              <li className="sandwich__size-item active">30 см.</li>
            </ul>
            <ul className="sandwich__bread">
              <li className="sandwich__bread-item active">белый хлеб</li>
              <li className="sandwich__bread-item">серый хлеб</li>
              <li className="sandwich__bread-item">ржаной хлеб</li>
            </ul>
          </div>
          <div className="sandwich__add">
            <p className="sandwich__price">300 ₽</p>
            <div className="button button--outline">
              <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
              </svg>
              <span>Добавить</span>
              <i className="button--info">2</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="container">
      <div className="header__inner">
        <div className="header__logo">
          <a href="./" className="header__link"><img src={logo} alt="Subway" /></a>
        </div>
        <div className="header__cart">
          <a href="./cart.html" className="button button--cart">
            <span className="header__cart-price">600 ₽</span>
            <svg className="header__cart-pic" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450.391 450.391"
              xmlSpace="preserve">
              <g>
                <g>
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
                </g>
              </g>
            </svg>
            <span className="header__cart-count">2</span>

          </a>
        </div>
      </div>
    </div>
  </footer>

</div>

  );
}

export default App;
