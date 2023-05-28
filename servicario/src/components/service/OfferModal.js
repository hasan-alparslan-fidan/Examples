import React, { useState } from "react";
import Modal from "components/Modal";
import { connect } from "react-redux";
import { createOffer } from "actions";
import toast from "react-hot-toast";

const OfferModal = ({ service, auth }) => {
  //the model we're setting
  const [offer, setOffer] = useState({
    fromUser: "",
    toUser: "",
    service: "",
    status: "pending",
    price: 0,
    time: 0,
    note: "",
  });

  //saving the changes to the modal
  const handleChange = ({ target: { value, name } }) => {
    if (name === "time") {
      const price = Math.round(value * service.price * 100) / 100;
      return setOffer({ ...offer, [name]: value, price });
    }
    return setOffer({ ...offer, [name]: value });
  };

  //get the data's on clicking the submit
  const handleSubmit = (closeModal) => {
    const offerCopy = { ...offer };
    offerCopy.fromUser = "profiles/" + auth.user.uid;
    offerCopy.toUser = "profiles/" + service.user.uid;
    offerCopy.service = "profiles/" + service.id;
    offerCopy.time = parseInt(offer.time, 10);

    //create the offer, add it to database
    createOffer(offerCopy).then(
      (_) => {
        closeModal();
        toast("Successful offer");
      },
      //on error show it on toast message
      (error) => toast(error)
    );
  };

  return (
    <Modal onModalSubmit={handleSubmit} openButtonText="Make an offer!">
      <div className="field">
        <input
          onChange={handleChange}
          name="note"
          className="input is-large"
          type="text"
          placeholder="Write some catchy note"
          max="5"
          min="0"
          autoFocus=""
        />
        <p className="help">Note can increase chance of getting the service</p>
      </div>
      <div className="field">
        <input
          onChange={handleChange}
          name="time"
          className="input is-large"
          type="number"
          placeholder="How long you need service for ?"
          max="5"
          min="0"
          autoFocus=""
        />
        <p className="help">Enter time in hours</p>
      </div>
      <div className="service-price has-text-centered">
        <div className="service-price-title">
          {service.user &&
            `Upon acceptance ${service.user.fullName} will charge you:`}
        </div>
        <div className="service-price-value">
          <h1 className="title">{offer.price}$</h1>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  services: state.services,
  selectedService: "",
});

export default connect(mapStateToProps)(OfferModal);
