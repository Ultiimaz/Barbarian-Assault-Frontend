import React, { Component } from 'react';
import threeEntryPoint from '../Game/threeEntryPoint';
export default class Canvas extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render () {
      return (
        <div ref={element => this.threeRootElement = element} />
      );
  }
}