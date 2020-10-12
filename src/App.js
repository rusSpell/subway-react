import React from 'react';
import axios from 'axios';

import { Header, Footer } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';


/* import './App.css'; */

function App() {
  const [sandwiches, setSandwiches] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/api.json').then(({ data }) => {
      setSandwiches(data.sandwiches);
    })
    /*  fetch('http://localhost:3000/api.json').then((resp) => resp.json()).then(json => {
          setSandwiches(json.sandwiches);
        }); */
  }, [])

  return (

    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={sandwiches} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
      <Footer />
    </div>

  );
}

export default App;
