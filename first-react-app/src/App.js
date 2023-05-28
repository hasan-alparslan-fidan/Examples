import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";

function App() {
  // const name = "hasan";

  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState("alparslan");
  const [events, setEvents] = useState([
    // { title: "mario id", id: 1 },
    // { title: "lui", id: 2 },
    // { title: "bowser", id: 3 },
  ]);

  console.log(showModal);

  const handleClose = () => {
    setShowModal(false);
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    // name === "alparslan" ? setName("fidan") : setName("alparslan");
    // console.log(name);
    // console.log(id);
    // setEvents(
    //   events.filter((e) => {
    //     return id !== e.id;
    //   })
    // );
    setEvents((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      <Title title="events in ur area" subtitle="the subtitle text" />
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            Hide events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}
      <h1>My name is {name} </h1>
      <button onClick={handleClick}>Change Name</button>
      <div>
        {showEvents &&
          events.map((event, index) => (
            //  <div key={event.id}>
            //   <h2>
            //   {index} {event.id}
            // </h2>
            // <button onClick={() => handleClick(event.id)}>
            //   delete event
            // </button>
            //</div>
            <React.Fragment key={event.id}>
              <h2>
                {index} {event.id}
              </h2>
              <button onClick={() => handleClick(event.id)}>
                delete event
              </button>
            </React.Fragment>
          ))}
        {showModal && (
          <Modal isSalesModal={true}>
            <h2>10% off coupon code !!</h2>
            <p>use the code bla bla</p>
            <NewEventForm addEvent={addEvent} />
          </Modal>
        )}

        <div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            show modal
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
