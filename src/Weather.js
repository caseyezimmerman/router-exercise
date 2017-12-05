import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
	constructor(){
		super();
		this.state = {
			weather: []
		}
	}

	componentDidMount(){
		var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=30342&units=imperial&appid=cbe27bfb560a2c414a9e3cc8a69ffe0d`;
		axios.get(weatherUrl)
		.then((weatherData)=>{
			console.log(weatherData.data)
			this.setState({
				weather: weatherData.data.main
			})
		})
	}


  render() {
  	var weather = this.state.weather
    return (
      <div>
      	<h1>This is the weather page</h1>
      	<p>Temperature: {weather.temp}</p>
      	<p>Pressure: {weather.pressure}</p>
      	<p>Humidity: {weather.humidity}</p>
      </div>
    );
  }
}

export default Weather;