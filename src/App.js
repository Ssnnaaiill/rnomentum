import React, { Component } from "react";
import { GlobalStyle, Name, Clock } from "./components";

class App extends Component {

	state = {
		name: null,
  };
  
	saveName = (data) => {
		this.setState({
			name: data,
    });
    
    localStorage.setItem("RNOMENTUM_NAME", data);
  }
  
	getName = () => {
    const name = localStorage.getItem("RNOMENTUM_NAME");
		if (name !== null) {
			this.setState ({
				name,
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
			{name === null ? (
        <Name handleSubmit={this.saveName} />
			) : (
        <>
        <Clock name={name} />
        </>
      )}
		  </>
		);
	}
}

export default App;
