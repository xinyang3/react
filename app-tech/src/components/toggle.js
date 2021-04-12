/*
 * @Author: xinyang3
 * @Date: 2021-04-12 09:52
 * @Descripttion: 事件处理
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-12 10:06
 */

import { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super();
    this.state = { isToggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggle ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
