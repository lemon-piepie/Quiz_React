import React, {Component} from 'react';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import showItem from "../pages/showItem";
import showOrder from "../pages/showOrder";
import addItem from "../pages/addItem";
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className = "app">
        <BrowserRouter>
          <NavLink exact to='/' className="link">商城</NavLink>
          <NavLink to='/order' className="link">订单</NavLink>
          <NavLink to='/add' className="link">+添加商品</NavLink>

          <Switch>
              <Route exact path='/' component={showItem}/>
              <Route exact path='/order' component={showOrder}/>
              <Route exact path='/add' component={addItem}/>
          </Switch>
        </BrowserRouter>     
      </div>
    );
  }
}

export default App;
