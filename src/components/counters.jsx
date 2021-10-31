import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
    ],
  };
  handleDelete = (counter) => {
    // console.log("Delete event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id != counter.id);
    //this works too!
    // this.setState({ counters: counters });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    //spread operator ... clone of state
    const counters = [...this.state.counters];
    //get the index of the counter being modified
    const index = counters.indexOf(counter);
    //we don't want to directly modify the state (a big no no in React) so need to clone the counter object at the location of incoming counter and then
    //set the state of the array
    //e.g. counters[0].value++ will modify the state directly which is not allowed ... in other words, react does not update the DOM
    // we only need to clone the entry that we need to modify thats the reason for getting the index
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    //spread operator ... clone of state
    const counters = [...this.state.counters];
    //get the index of the counter being modified
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            counter={counter}
            // key={counter.id}
            // value={counter.value}
            // id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
