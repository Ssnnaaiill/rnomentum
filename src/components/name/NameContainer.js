import React, { Component } from 'react';
import Name from './Name';

class NameContainer extends Component {

	state = {
		value: '',
	};

	handleChange = e => {
		this.setState({
			value: e.target.value,
		});
	}

	handleSubmit = e => {
		e.preventDefault();
		const { value } = this.state;
		this.props.saveName(value);
	}

	render() {
		const { value } = this.state;
		
		return (
			<Name value={value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
		);
	}
}

export default NameContainer;
