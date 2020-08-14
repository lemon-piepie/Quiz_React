import React, { Component } from 'react';
import '../style/Item.css';
import imgURL1 from '../images/可乐1.jpg';
import imgURL2 from '../images/可乐2.jpg';
import imgURL3 from '../images/可乐3.jpg';
import imgURL4 from '../images/可乐4.jpg';
import imgURL5 from '../images/可乐5.jpg';
import imgURL6 from '../images/可乐6.jpg';



class Item extends Component {
    state = {
        img:[
            imgURL1,imgURL2,imgURL3,imgURL4,imgURL5,imgURL6,
        ],
        count:0,
    };


    /*
    buyItem =  () => {
        let item = {};
        item.name = this.props.name;
        item.singlePrice = 1;
        fetch('http://localhost:8080/index/goods', {
        　　method:'post',
        　　headers: {
        　　　　'Content-Type': 'application/json'
        　　},
        　　body:JSON.stringify(item),
        }).then(response => response.text()).then(data => {
        　　alert(data)
        }).catch(function(e){
        　　alert("error:" + e);
        })
        console.log(JSON.stringify(item))
    };   */

  render() {
    return (
      <div className="item">
        <img src={this.state.img[this.props.id-1]} className="itemPic"></img>
        <h4 className="itemName">{this.props.name}</h4>
        <p className="itemPrice">单价：1元/瓶</p>
        <button className="add" /*onClick = {this.buyItem}*/>+</button>
      </div>
    );
  }
}

export default Item;