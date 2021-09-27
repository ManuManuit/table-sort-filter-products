import React, { Component } from 'react';
import { Route } from 'react-router-dom'

/**Components */
import Header from './components/Header/Header'

/**Screens */
import Home from './Screens/Home/Home'
import Table from './Screens/Table/Table'
import Products from './Screens/Products/Products'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/table" component={Table} exact />
        <Route path="/products" component={Products} exact />
      </div>
    );
  }
}

export default App;
