import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from "../components/Item";


class showItem extends Component {
    state = {
        products:[
            {name:'可乐1', id: 1 },
            {name:'可乐2', id: 2 },
            {name:'可乐3', id: 3 },
            {name:'可乐4', id: 4 },
            {name:'可乐5', id: 5 },
            {name:'可乐6', id: 6 },
        ]
    }
  
  render() {
    return (
        <div className="goods">
            <table className="goodsTable">
                <tr>
                    <td><Item name = {this.state.products[0].name} id = {this.state.products[0].id} /></td>
                    <td><Item name = {this.state.products[1].name} id = {this.state.products[1].id} /></td>
                    <td><Item name = {this.state.products[2].name} id = {this.state.products[2].id} /></td>
                    <td><Item name = {this.state.products[3].name} id = {this.state.products[3].id} /></td>
                </tr>
                <tr>
                    <td><Item name = {this.state.products[4].name} id = {this.state.products[4].id} /></td>
                    <td><Item name = {this.state.products[5].name} id = {this.state.products[5].id} /></td>
                </tr>
            </table>

        </div>
    );
  }
}

export default showItem;