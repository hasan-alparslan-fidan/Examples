import React from "react";

//access level
import withAuthorization from "components/hoc/withAuthorization";

//services
import { fetchUserServices } from "actions";

//component
import ServiceItem from "components/service/ServiceItem";

class UserServices extends React.Component {
  
  //fetch the data belonging to user, before rendering it on screen, prevent empty screen
  componentDidMount() {
    const {
      auth: { user },
      dispatch,
    } = this.props;
    dispatch(fetchUserServices(user.uid));
  }

  render() {
    const { services } = this.props.auth.user;

    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Your services :</h1>
          <div className="columns is-multiline">
            {services.map((s) => (
              <div key={s.id} className="column">
                <ServiceItem service={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthorization(UserServices);
