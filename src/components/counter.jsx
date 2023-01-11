import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    // setState work:
    //   1- calls the render method after a scheduled time (asynchronous 5ms or 10ms)
    //   2- compares the new results and old results of render method
    //   3- only updates the difference of the comparisiion
    // So here just the span will update, not the whooole div element
    // imagine there is a high quality images and they will time consuming to reload, why to re render them ?!!
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
