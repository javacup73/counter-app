import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
    ],
  };
  constructor(){
    super();
    console.log('App - Constructor');
  }
  componentDidMount(){
    console.log('App mounted.. Make Ajax call and set state');    
  }

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
    console.log("App rendered..");
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/><main className="container">
        <Counters counters={this.state.counters} onReset = {this.handleReset} onIncrement = {this.handleIncrement} onDecrement={this.handleDecrement} onDelete = {this.handleDelete}  />
      </main>
      </React.Fragment>
      );
  }
}
export default App;
