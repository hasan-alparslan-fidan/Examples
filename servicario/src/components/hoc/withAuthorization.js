import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

//check every component sent here, that its allowed to visit that page,
//example already signed in pages cannot visit "sign in" and "sign up" pages
//and only authed users can view certain pages

const withAuthorization = (Component) => {
  class WithAuthorization extends React.Component {
    render() {
      const { auth } = this.props;
      //providing every page using this below the page, 
      //next to the export function, can access the auth state
      return auth.isAuth ? <Component {...this.props} /> : <Navigate to="/login" />;
    }
  }

  return connect(({ auth }) => ({ auth }))(WithAuthorization);
};

export default withAuthorization;
