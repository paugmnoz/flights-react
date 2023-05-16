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
    <div>
      vuelo número  {flight_number} llegando a
      {arriving_to}
    </div>
  )
}