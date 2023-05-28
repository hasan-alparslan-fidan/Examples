import React from "react";
import withAuthorization from "components/hoc/withAuthorization";
import ServiceItem from "components/service/ServiceItem";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";
import { fetchSentOffers, collaborate } from "actions";
import { newCollaboration, newMessage } from "helpers/offers";

class SentOffers extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    this.props.dispatch(fetchSentOffers(auth.user.uid));
  }

  createCollaboration = (offer) => {
    const {
      auth: { user },
    } = this.props;

    const collaboration = newCollaboration({ offer, fromUser: user });
    const message = newMessage({ offer, fromUser: user });

    this.props.collaborate({ collaboration, message }).then((_) =>
     toast("Collaberation added")
    );
  };

  render() {
    const { offers } = this.props;
    // console.log("ALL OFFERS : ", offers);
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Sent Offers</h1>
          <div className="columns">
            {offers.map((offer) => (
              <div key={offer.id} className="column is-one-third">
                {/* {console.log("OFFER : ", offer)} */}
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}
                >
                  <div className="tag is-large">{offer.status}</div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">To User:</span>{" "}
                      {offer.toUser.fullName}
                    </div>
                    <div>
                      <span className="label">Note:</span> {offer.note}
                    </div>
                    <div>
                      <span className="label">Price:</span> ${offer.price}
                    </div>
                    <div>
                      <span className="label">Time:</span> {offer.time} hours
                    </div>
                  </div>
                  {offer.status === "accepted" && !offer.collaborationCreated && (
                    <div>
                      <hr />
                      <button
                        onClick={() => this.createCollaboration(offer)}
                        className="button is-success"
                      >
                        Collaborate
                      </button>
                    </div>
                  )}
                </ServiceItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ offers }) => ({ offers: offers.sent });

export default withAuthorization(
  connect(mapStateToProps, { collaborate })(SentOffers)
);
