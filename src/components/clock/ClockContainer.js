import React, { Component } from 'react';
import Clock from './Clock';

class ClockContainer extends Component {
	state = {
		time: '',
		greeting: '',
	};
	getTime = () => {
		const date = new Date();
		const hour = date.getHours();
		const min = date.getMinutes();
		const sec = date.getSeconds();
		const time = `${hour > 9 ? hour : `0${hour}`}:${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`;
		this.setState({
			time,
		});
		if (hour >= 5 && hour < 12) {
			this.setState({
				greeting: 'Good Morning',
			});
		} else if (hour >= 12 && hour < 17) {
			this.setState({
				greeting: 'Good Afternoon',
			});
		} else {
			this.setState({
				greeting: 'Good Evening',
			});
		}
	};
	componentDidMount() {
		setInterval(this.getTime, 1);
	}
	render() {
		const { time, greeting } = this.state;
		const { name } = this.props;
		return <Clock name={name} time={time} greeting={greeting} />;
	}
}

export default ClockContainer;