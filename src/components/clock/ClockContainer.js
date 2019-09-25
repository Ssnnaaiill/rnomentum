import React, { Component } from 'react';
import Clock from "./Clock";

class ClockContainer extends Component {

  state = {
    time: "",
    greeting: ""
  };

  getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes()
    // time format is like `HH:MM`
    const time = `${hour > 9 ? hour : `0${hour}`}:${minute > 9 ? minute : `0${minute}`}`;
    
    this.setState({
      time,
    });


    /**
     * print different greeting pharses according to each time slots
     * - 06:00 ~ 11:59 : Good Morning
     * - 12:00 ~ 16:59 : Good Afternoon
     * - 17:00 ~ 20:59 : Good Evening
     * - 21:00 ~ 05:59 : Good Night
     */

    if (hour >= 5 && hour < 12) {
      // morning
      this.setState({
        greeting: "Good morning"
      });
    } else if (hour >= 12 && hour < 17) {
      // afternoon
      this.setState({
        greeting: "Good Afternoon"
      });
    } else if (hour >= 17 && hour < 21) {
      // evening
      this.setState({
        greeting: "Good Evening"
      });
    } else {
      // night
      this.setState({
        greeting: "Good Night"
      });
    }
  }

  // get current time every 1ms
  componentDidMount() {
    setInterval(this.getTime, 1);
  }

  render() {
    const { time, greeting } = this.state;
    // name has come from App.js
    const { name } = this.props;
    return (
      <Clock name={name} time={time} greeting={greeting} />
    );
  }
}

export default ClockContainer;
