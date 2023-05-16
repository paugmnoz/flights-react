import './App.css';
import './variables.css'
import Home from './Home/Home';
import React from "react";
import flights_json from './flights.json'
import './App.css';

const API_KEY = `${process.env.REACT_APP_FLIGHTS_API_KEY}`;

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

    console.log()
    this.state = {
			DataisLoaded: true,
      flights_data: []
		};

	}

	componentDidMount() {
    this.setState({
      DataisLoaded: true,
      flights_data: flights_json.data
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
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<Home key={1} flight_data = {this.state.flights_data}></Home>
		</div>
	);
}
}

export default App;