import React, { Component } from "react";
import { GlobalStyle, Name } from "./components";

class App extends Component {
  state = {
    name: null
  };

  // save input data in state name and local storage
  saveName = (data) => {
    this.setState({
      name: data
    });
    localStorage.setItem("RNOMENT_NAME", data);
  };

  // get name from local storage
  getName = () => {
    const name = localStorage.getItem("RNOMENT_NAME");
    if (name !== null) {
      this.setState({
        name
      });
    }
  }

  componentDidMount() {
    this.getName();
  }

  render() {
    const { name } = this.state;

    return (
      <>
        <GlobalStyle />
        { /* check if name is null */ }
        { name === null ? <Name saveName={this.saveName} /> : name }
      </>
    );
  }
}

export default App;