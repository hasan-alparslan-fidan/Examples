import React from "react";
import styles from "./components/EventListModule.css"

export default function EventList(events, handleClick) {
  return (
    <div>
      {events.map((event, index) => (
        // <React.Fragment key={event.id}>

        // </React.Fragment>

        <div className= {styles.card} key = {event.id}>
             

        </div>
      ))}
    </div>
  );
}
