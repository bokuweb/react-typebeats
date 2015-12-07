import React, { Component } from 'react';
import { render } from 'react-dom';
import Keyboard from './keyboard';
import Sprite from './sprite';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("dis");
    this.refs.test1.preload();
  }

  onClick() {
    console.log("click");
    this.refs.test.test("message");
  }

  onClick2() {
    console.log("click");
    this.refs.test1.test("message");
  }

  render() {
    const a = 1;
    const test = (a === 0)? <Sprite src="./images/logo.png" ref="test" onClick={this.onClick.bind(this)} /> : <i />
    return (
      <div>
        {test}
        <Keyboard />
      </div>
    );
  }
}

