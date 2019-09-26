import React, { Component } from 'react';
import Weather from './Weather';
import axios from 'axios';

class WeatherContainer extends Component {
  
  state = {
		temp: '',
		name: '',
		location: '',
	};

	// set base url and app id
	api = axios.create({
		baseURL: 'https://api.openweathermap.org/data/2.5',
		params: {
      // my openweathermap api access key
			APPID: '03006fb4cfc0808a3cdfb5eb05af87b0'
		}
	});

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			// add latitude and longitude as api parameter
			const getWeather = this.api.get(
				'/weather',
				{
					params: {
						lat: position.coords.latitude,
						lon: position.coords.longitude
					}
				},
        (err) => {
          console.log(err)
        }
			);
      
      getWeather.then(
        (res) => {
					this.setState({
						temp: String(Math.ceil(res.data.main.temp - 273.15)),
						name: res.data.weather[0].main,
						location: res.data.name
					});
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      );
		});
	}

	render() {
		const { temp, name, location } = this.state;
    return (
      <Weather temp={temp} name={name} location={location} />
    );
	}
}

export default WeatherContainer;