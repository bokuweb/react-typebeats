import React, { Component } from 'react';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul id="keyboard">
        <hr className="decision-line" />
        <li className="tab">tab</li>
        <li className="letter">Q</li>
        <li className="letter">W</li>
        <li className="letter">E</li>
        <li className="letter">R</li>
        <li className="letter">T</li>
        <li className="letter">Y</li>
        <li className="letter">U</li>
        <li className="letter">I</li>
        <li className="letter">O</li>
        <li className="letter">P</li>
        <li className="symbol">[</li>
        <li className="symbol">]</li>
        <li className="symbol lastitem">\</li>
        <li className="capslock">caps lock</li>
        <li className="letter">A</li>
        <li className="letter">S</li>
        <li className="letter">D</li>
        <li className="letter">F</li>
        <li className="letter">G</li>
        <li className="letter">H</li>
        <li className="letter">J</li>
        <li className="letter">K</li>
        <li className="letter">L</li>
        <li className="symbol">;</li>
        <li className="symbol">'</li>
        <li className="return lastitem">return</li>
        <li className="left-shift">shift</li>
        <li className="letter">Z</li>
        <li className="letter">X</li>
        <li className="letter">C</li>
        <li className="letter">V</li>
        <li className="letter">B</li>
        <li className="letter">N</li>
        <li className="letter">M</li>
        <li className="symbol">,</li>
        <li className="symbol">.</li>
        <li className="symbol">/</li>
        <li className="right-shift lastitem">shift</li>
      </ul>
    );
  }
}
