import React from 'react';
import axios from 'axios';
/* import store from './redux/store' */
import { useDispatch } from 'react-redux';

import { Header, Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { setProducts } from './redux/actions/products.js';


/* import './App.css'; */

function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    axios.get('http://localhost:3001/sandwiches').then(({ data }) => {
      dispatch(setProducts(data));
    });
  }, [])
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

/* export default connect(
  (state) => {
    return {
      items: state.products.items,
      filters: state.filters,
    };
  },
  (dispatch) => {
    return {
      setProducts: (items) => dispatch(setProducts(items)),
    };
  },
)(App); */

/* class App extends React.Component {
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
 */
