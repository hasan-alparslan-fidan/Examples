/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import ServiceItem from "components/service/ServiceItem.js";
import Hero from "components/Hero";

//services
import { fetchServices } from "../actions/index.js";

class Home extends React.Component {
  //initializing the state
  state = {
    services: [],
  };

  //after the components load, upload the state to page
  componentDidMount() {
    this.props.fetchServices();
  }

  //render the objects inside html files below
  renderServices = (services) =>
    services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));

  render() {
    const { services } = this.props;

    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">
                With great Responsability
              </h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">{this.renderServices(services)}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ services: state.services.all });

//connecting to the state manager, getting real-time data from firebase
//fetch services allows to delete dispatch part from the componentDidMount method, making it shorter
export default connect(mapStateToProps, { fetchServices })(Home);
