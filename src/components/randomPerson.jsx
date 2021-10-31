import React, { Component } from "react";

class RandomPerson extends React.Component {
  state = {
    isLoaded: false,
    items: [],
    error: null,
    url: "https://randomuser.me/api/",
  };
  handleLoadPerson = () => {
    console.log(this.state.isLoaded);
    fetch(this.state.url)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res.results,
          });
          console.log(this.state.isLoaded);
          console.log(this.state.items);
        },
        (_error) => {
          console.log("error");
          this.setState({
            isLoaded: true,
            error: _error,
          });
        }
      );
  };
  render() {
    // const { name, age } = this.state.person;
    const { items, isLoaded, error, url } = this.state;
    if (error != null) {
      return <div>Error occured while fetching the person from {url}</div>;
    }
    if (!isLoaded) {
      return (
        <div>
          <p>Loading...</p>
          {this.handleLoadPerson()}
        </div>
      );
    } else {
      return (
        <div className="container">
          {items.map((item) => (
            <div>
              <p>
                Name: {item.name.first} {item.name.last}
              </p>
              <img src={item.picture.medium} alt={item.name.first} />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default RandomPerson;
