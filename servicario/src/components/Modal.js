import React, { useState } from "react";

//Opens the clicked services details for us, like clicking a twitter post to see the comments
const Modal = (props) => {
  const [isActive, setIsActive] = useState(false);

  const changeModalState = (modalState) => {
    setIsActive(modalState);
  };

  return (
    <div>
      <button
        onClick={() => changeModalState(true)}
        type="button"
        className="button is-medium is-info is-outlined"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        {props.openButtonText || "Open"}
      </button>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <h1 className="modal-card-title">Make a Deal</h1>
            <button
              onClick={() => changeModalState(false)}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">{props.children}</section>
          <footer className="modal-card-foot">
            <button onClick={() => props.onModalSubmit(() => changeModalState(false))} className="button is-success">
              Save changes
            </button>
            <button onClick={() => changeModalState(false)} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
