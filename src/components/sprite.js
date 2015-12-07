import React, { Component } from 'react';

const style = {
  width: '60px',
  height: '60px',
  overflow: 'hidden',
  position: 'absolute',
  background: '#333'
};

export default class Sprite extends Component {
  constructor(props) {
    super(props);
    this.image ={};
    //let image = new Image();
    //image.src = this.props.src;
    console.log("ctr");
    //image.onload = () => {
    //  console.log("laod");
    //  this.image.height = image.height;
    //  this.image.width = image.width;
  }

  preload() {
    return new Promise((resolve, reject) =>{
      let image = new Image();
      image.src = this.props.src;
      console.log("preload");
      image.onload = () => {
        console.log("laod");
        this.image.height = image.height;
        this.image.width = image.width;
      }
    });
  }

  test(message) {
    console.log(message);
  }

  render() {
    console.log("lender");
    return (
      <div style={style} onClick={this.props.onClick}>
        <img src={this.props.src} />
      </div>
    );
  }
}
