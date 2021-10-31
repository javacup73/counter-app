import React, { Component } from "react";

//stateless functional component
class NavBar extends React.Component {
  render() {
    console.log("Navbar - rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge alert-primary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
