import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
