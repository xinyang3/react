/*
 * @Author: xinyang3
 * @Date: 2021-04-09 17:57
 * @Descripttion: react状态
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-12 09:28
 */
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>hello world.</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
