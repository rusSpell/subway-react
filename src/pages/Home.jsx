import React from 'react'
import {Categories, Sort } from '../components';
import sandwich from '../assets/images/sandwich.jpg';
function Home() {
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
              'популярности',
              'цене',
              'алфавиту'
            ]} />

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
    )
}

export default Home
