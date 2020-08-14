import React, { Component } from 'react';
import '../style/showOrder.css';  


class showOrder extends Component {
    state = {
        products:[
            {name:'可乐1', singlePrice:1 , amount:2 , unit:'瓶' },
            {name:'可乐2', singlePrice:1 , amount:1 , unit:'瓶' },
            {name:'可乐4', singlePrice:1 , amount:5 , unit:'瓶' },
        ]
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
                <tr>
                    <td>{this.state.products[0].name}</td>
                    <td>{this.state.products[0].singlePrice}</td>
                    <td>{this.state.products[0].amount}</td>
                    <td>{this.state.products[0].unit}</td>
                    <td><button>删除</button></td>
                </tr>
                <tr>
                    <td>{this.state.products[1].name}</td>
                    <td>{this.state.products[1].singlePrice}</td>
                    <td>{this.state.products[1].amount}</td>
                    <td>{this.state.products[1].unit}</td>
                    <td><button>删除</button></td>
                </tr>
                <tr>
                    <td>{this.state.products[2].name}</td>
                    <td>{this.state.products[2].singlePrice}</td>
                    <td>{this.state.products[2].amount}</td>
                    <td>{this.state.products[2].unit}</td>
                    <td><button>删除</button></td>
                </tr>
            </table>
        </div>
    );
  }
}

export default showOrder;