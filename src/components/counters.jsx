import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onReset, onDelete } =
      this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
