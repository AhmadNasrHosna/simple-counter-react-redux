import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleDecrease() {
    if (this.props.countValue > 0) {
      return this.props.decreaseCount;
    }
  }

  render() {
    return (
      <div className="c-counter">
        <button className="c-button" onClick={this.handleDecrease()}>
          -
        </button>
        <span className="c-counter__count">{this.props.countValue}</span>
        <button className="c-button" onClick={this.props.increaseCount}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
