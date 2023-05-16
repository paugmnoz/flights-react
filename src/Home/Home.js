import React from 'react';
import DepartureItem from './DepartureItem';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.flight_data,
        };
    }

    render() {
        { console.log('data' + this.state.data.map((flight) => flight.departure.airport)) }

        return (
            <div>
                <h1>Welcome to Track your flight</h1>
                <ul>
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

            </div>

        );
    }
}