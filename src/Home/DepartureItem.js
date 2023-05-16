export default function DepartureItem({
  depart_date,
  flight_number,
  flight_status,
  terminal,
  gate,
  arriving_to,
  arrival_date
}) {
  return (
    <li className="departureItem">
      <p>{depart_date}</p>
      <p>{flight_number}</p>
      <p>{flight_status}</p>
      <p>{terminal}</p>
      <p>{gate}</p>
      <p>{arriving_to}</p>
      <p>{arrival_date}</p>
    </li>
  )
}