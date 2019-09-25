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

		// time format is like HH:MM:SS
		const time = `${hour > 9 ? hour : `0${hour}`}:${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`;
		this.setState({
			time,
		});


		/**
		 * print different greeting sentence according to time
		 * - 05:00 ~ 11:59 : Morning
		 * - 12:00 ~ 16:59 : Afternoon
		 * - 17:59 ~ 21:59 : Evening
		 * - 22:00 ~ 05:59 : Night
		 */

		if (hour >= 6 && hour < 12) {
			this.setState({
				greeting: '좋은 아침이에요'
			});
		} else if (hour >= 12 && hour < 17) {
			this.setState({
				greeting: '좋은 점심이에요'
			});
		} else if (hour >= 17 && hour < 22) {
			this.setState({
				greeting: '좋은 저녁이에요',
			});
		} else {
			this.stateState({
				greeting: 'Good Night'
			});
		}
	}

	// check current time each 1ms
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