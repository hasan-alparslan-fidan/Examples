import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

//check every component sent here, that its allowed to visit that page,
//example : already signed in pages cannot use logout function/button
const onlyGuest = (Component) => {
  class OnlyGuest extends React.Component {
    render() {
      const { auth, dispatch, ...rest } = this.props;
      return auth.isAuth ? <Navigate to="/" /> : <Component {...rest} />;
    }
  }

  return connect(({ auth }) => ({ auth }))(OnlyGuest);
};

export default onlyGuest;
