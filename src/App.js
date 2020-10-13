import React from 'react';
import axios from 'axios';
/* import store from './redux/store' */
import { connect } from 'react-redux'

import { Header, Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import {setProducts as setProductsAction} from './redux/actions/products.js';


/* import './App.css'; */

/* function App() {
  React.useEffect(() => {
    axios.get('http://localhost:3000/api.json').then(({ data }) => {
      setSandwiches(data.sandwiches);
    })
      fetch('http://localhost:3000/api.json').then((resp) => resp.json()).then(json => {
          setSandwiches(json.sandwiches);
        }); 
  }, [])

  return 
} */

class App extends React.Component {
  componentDidMount(){
    axios.get('http://localhost:3000/api.json').then(({ data }) => {
      this.props.setProducts(data.sandwiches);
    })
  }
  render() {
   return (

      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
        <Footer />
      </div>
  
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.products.items,
    filters: state.filters,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setProducts: (items) => dispatch(setProductsAction(items))
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(App);
