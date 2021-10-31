import React, { Component } from "react";
//changing this to a controlled child component which means the parent controls the state and behavior of this component
class Counter extends React.Component {
  //difference between state and props:
  //state: is internal to the component (private data)
  //props: is data that you can pass into the component from another component
  //external components do not have access to internal state of other components
  //components cannot modify the values passed into the component from other components (immutable)
  style = {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  };
  //this lifecycle method allows us to make a decision whether to get new data by making an Ajax call
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps" + prevProps);
    console.log("prevState" + prevState);
  }
  render() {
    console.log("Counter.. rendered");
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge alert-";
    switch (this.props.counter.value) {
      case 0:
        classes += "warning";
        break;
      default:
        classes += this.props.counter.value > 0 ? "primary" : "danger";
        break;
    }
    return classes;
  }

  formatCount() {
    return this.props.counter.value == 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
