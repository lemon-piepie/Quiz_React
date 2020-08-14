import React, { Component } from 'react';
import '../style/addItem.css';


class addItem extends Component {
    state = {
        name:"",
        price:0,
        unit:"",
        picURL:"",
      };
  
      inputName = (event) => {
        this.setState({
          name:event.target.value,
        });
      };
    
      inputPrice = (event) => {
        this.setState({
            price:event.target.value,
        });
      };
    
      inputUnit = (event) => {
        this.setState({
            unit:event.target.value,
        });
      };

      inputPicURL = (event) => {
        this.setState({
            picURL:event.target.value,
        });
      };
        
      handleSubmit = (event) => {
        alert("添加成功！");
      }
      
  render() {
    return (
        <div className="addItemForm">
          <h1 className="topic">添加商品</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="name">
              <label htmlFor="name"><span className="mark">*</span>名称：</label>
              <input type="text" value={this.state.name} onChange={this.inputName} placeholder="名称" className="nameText">
              </input>
            </div>
            
            <div className="price">
              <label htmlFor="price"><span className="mark">*</span>价格：</label>
              <input type="text" value={this.state.price} onChange={this.inputPrice} placeholder="价格" className="priceText">
              </input>
            </div>
  
            <div className="unit">
              <label htmlFor="unit"><span className="mark">*</span>单位：</label>
              <input type="text" value={this.state.unit} onChange={this.inputUnit} placeholder="单位" className="unitText">
              </input>
            </div>

            <div className="picURL">
              <label htmlFor="picURL"><span className="mark">*</span>图片：</label>
              <input type="text" value={this.state.picURL} onChange={this.inputPicURL} placeholder="URL" className="picURLText">
              </input>
            </div>
  
            <div className="submit">
              <input type="submit" value="提交" 
              disabled={!this.state.name  || !this.state.price || !this.state.unit || !this.state.picURL}></input>
            </div>
  
          </form>
        </div>
        
      );
  }
}

export default addItem;