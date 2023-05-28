import { useState } from "react";

import { useFetch } from "../hooks/useFetch.js";

//styles
import "./TripList.css";
export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data, isPending, error } = useFetch(url);
  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  // useEffect(() => {
  //   // fetch(url)
  //   //   .then((response) => response.json())
  //   //   .then((json) => setTrips(json));
  //   fetchTrips();
  // }, [fetchTrips]);

  return (
    <div className="trip-list">
      <h2>Triplist</h2>
      {isPending && <div>Loading trips...</div>}
      <ul>
        {data &&
          data.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          european trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=america")}
        >
          american trips
        </button>
      </div>
    </div>
  );
}
