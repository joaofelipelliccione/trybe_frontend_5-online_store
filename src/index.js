import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {/* Resolução do problema de reload Cart, no GH Pages. */}
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
