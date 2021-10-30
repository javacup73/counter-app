import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  style = {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  };
  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  // }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //has the same effect as the constructor, the reference to this is not undefined
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge alert-";
    switch (this.state.count) {
      case 0:
        classes += "warning";
        break;
      default:
        classes += this.state.count > 0 ? "primary" : "danger";
        break;
    }
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
