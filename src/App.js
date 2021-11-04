import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/trybe_frontend_5-online_store/" render={ () => <Home /> } />
          <Route exact path="/trybe_frontend_5-online_store/cart" render={ () => <Cart /> } />
          <Route
            exact
            path="/products/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
