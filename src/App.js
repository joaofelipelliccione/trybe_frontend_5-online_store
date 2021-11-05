import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/cart" render={ () => <Cart /> } />
        <Route
          exact
          path="/products/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </div>
  );
}

export default App;
