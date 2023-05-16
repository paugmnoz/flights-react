import './App.css';
import Home from './Home/Home';
import React from "react";
import flights_json from './flights.json'
import airports_json from './airports.json'

const API_KEY = `${process.env.REACT_APP_FLIGHTS_API_KEY}`;

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			DataisLoaded: true,
			flights_data: [],
			airports_data: []
		};

	}

	componentDidMount() {
		this.setState({
			DataisLoaded: true,
			flights_data: flights_json.data,
			airports_data: airports_json.data
		})


		/*
				fetch(
			  "http ://api.aviationstack.com/v1/flights?access_key=" + `${API_KEY}`)
					.then((res) => res.json())
			  .then(console.log)
					.then((json) => {
						this.setState({
							DataisLoaded: true;
				  data: json
						});
					})*/

	}
	render() {
		const { DataisLoaded, flights_data } = this.state;

		console.log('app' + typeof (flights_data))
		if (flights_data.length === 0) return <div>
			<h1> Please wait some time.... </h1> </div>;

		return (
			<div className="App">
				<Home key={1} flight_data={this.state.flights_data} airports_data={this.state.airports_data}></Home>
			</div>
		);
	}
}

export default App;