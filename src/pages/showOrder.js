import React, { Component } from 'react';
import '../style/showOrder.css';  


class showOrder extends Component {
    state = {
        products:[
            {name:'可乐1', singlePrice:1 , amount:2 , unit:'瓶', id:1 },
            {name:'可乐2', singlePrice:1 , amount:1 , unit:'瓶', id:2},
            {name:'可乐4', singlePrice:1 , amount:5 , unit:'瓶', id:3 },
        ]
    }

    deleteItem = (props) => {

    }
      
  render() {
    return (
        <div className = "showOrder">
            <table>
                <tr className="firstLine">
                    <td>名字</td>
                    <td>单价</td>
                    <td>数量</td>
                    <td>单位</td>
                    <td>操作</td>
                </tr>
                {this.state.products.map( (product) =>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.singlePrice}</td>
                        <td>{product.amount}</td>
                        <td>{product.unit}</td>
                        <td><input type="submit" value="删除" onClick={this.deleteItem}></input></td>
                    </tr>
                )}               
            </table>
        </div>
    );
  }
}

export default showOrder;