import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    console.log("Counters.. rendered");
    //Object de-structuring... this avoids repeated this.props when using members
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            counter={counter}
            // key={counter.id}
            // value={counter.value}
            // id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
