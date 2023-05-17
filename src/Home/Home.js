import React from 'react';
import DepartureItem from './DepartureItem';
import './Home.css';
import Header from './Header';
import Select from 'react-select'
import { getValue } from '@testing-library/user-event/dist/utils';


export default class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: this.props.flight_data,
            airports_data: this.props.airports_data,
            options: [],
            selectedAirport: '',
            departuresFound: false,

        };

    }

    addAirport() {
        var new_airport = {
            value: '', label: ''
        };
        var options_array = []
        this.state.airports_data.map((airport) => {
            console.log( 'DATA AIRPORT  => ' +
            airport.airport_name 
        )
            new_airport = {
                value: airport.airport_name, label: airport.airport_name
            }
            options_array.push(new_airport)
            return options_array
        })
        this.state.options = options_array
    }

    handleChange(e) {
        this.setState({selectedAirport: e.value});

    }

    render() {
        this.addAirport();
        return (
            <div>
                <Header ></Header>
                <section className='home_content'>
                    <h2>Departure Flights from:</h2>
                    <div className='search_bar'>
                        <Select options={this.state.options}
                            onChange={(selected) => this.handleChange(selected)} />
                        <p> or enter airport code </p>
                        <input className='iata_input' type="text" placeholder='IATA code' id="iatacode" name="iatacode" />
                    </div>
                    <ul>
                        <li className='listHeader'>
                            <p>Departs on</p>
                            <p>Flight</p>
                            <p>Status</p>
                            <p>Terminal</p>
                            <p>Gate</p>
                            <p>Arriving at</p>
                            <p>Estimated arrival</p>
                        
                        </li>
                        
                        {
                          
                            this.state.data.map((flight) => {
                                console.log( 'FLIGHTS AIRPORT  => ' +
                                    flight.departure.airport 
                                )  
                                if(flight.departure.airport == this.state.selectedAirport) {
                                    return <DepartureItem
                                    arriving_to={flight.arrival.airport}
                                    depart_date={flight.flight_date}
                                    flight_number={flight.flight.iata}
                                    flight_status={flight.flight_status}
                                    terminal={flight.departure.terminal}
                                    gate={flight.departure.gate}
                                    arrival_date={flight.arrival.estimated}
                                ></DepartureItem>
                                } 
                            })

                        }
                            
                        
                    </ul>
                </section>
            </div>

        );
    }
}