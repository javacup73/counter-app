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
  handleDelete = (counterId) => {
    // console.log("Delete event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    //this works too!
    // this.setState({ counters: counters });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            counter={counter}
            // key={counter.id}
            // value={counter.value}
            // id={counter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
