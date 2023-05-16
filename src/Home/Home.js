import React from 'react';
import DepartureItem from './DepartureItem';
import './Home.css';
import Header from './Header';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.flight_data.slice(0, 15),
        };
    }

    render() {
        console.log('home' + this.state.data)

        return (
            <div>
                <Header></Header>
                <section className='home_content'>
                    <h2>Departure Flights</h2>
                    <div className='search_bar'>
                        <p> or enter airport code </p>
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
                                return <DepartureItem
                                    arriving_to={flight.departure.airport}
                                    depart_date={flight.flight_date}
                                    flight_number={flight.flight.iata}
                                    flight_status={flight.flight_status}
                                    terminal={flight.departure.terminal}
                                    gate={flight.departure.gate}
                                    arrival_date={flight.arrival.estimated}
                                ></DepartureItem>
                            })
                        }
                    </ul>
                </section>


            </div>

        );
    }
}