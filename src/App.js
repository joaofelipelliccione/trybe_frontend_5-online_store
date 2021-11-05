import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/trybe_frontend_5-online_store"> {/* Resolução do problema de reload Cart, no GH Pages. */}
        <Switch>
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/cart" render={ () => <Cart /> } />
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
