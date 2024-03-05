// En App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ProductDetailContainer from './components/ProductDetailContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/product/:id" component={ProductDetailContainer} />
      </Switch>
    </Router>
  );
}

export default App;
