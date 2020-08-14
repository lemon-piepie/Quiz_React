import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import Item from "../components/Item";
import showItem from "../pages/showItem";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="app">
        这是一个新的购物车界面
        <Link to='/'>商城</Link>
        <Link to='/order'>订单</Link>
        <Link to='/add'>+添加商品</Link>

        <Switch>
            <Route exact path='/' component={showItem}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
