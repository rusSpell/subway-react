import React from 'react';

/* import store from './redux/store' */
import { Header, Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
/* import { fetchProducts } from './redux/actions/products.js'; */

/* import './App.css'; */

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;