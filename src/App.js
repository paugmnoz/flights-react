import './App.css';
import './variables.css'
import Home from './Home/Home';
import React from "react";
import './App.css';

const API_KEY = `${process.env.REACT_APP_FLIGHTS_API_KEY}`;

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			DataisLoaded: true
		};

	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
/*
		fetch(
      "http ://api.aviationstack.com/v1/flights?access_key=" + `${API_KEY}`)
			.then((res) => res.json())
      .then(console.log)
			.then((json) => {
				this.setState({
					DataisLoaded: true
				});
			})*/

	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<Home></Home>
		</div>
	);
}
}

export default App;