import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React from "react";
import RoutesS from "./Routes.js";

import { connect } from "react-redux";
import Spinner from "components/Spinner.js";
import { logout } from "actions";

class ServiceApp extends React.Component {
  handleLogout = () => this.props.dispatch(logout());

  renderApplication = (auth) => (
    <React.Fragment>
      <Navbar
        loadFresh
        logout={this.handleLogout}
        auth={auth}
        id="navbar-main"
      />
      <Navbar logout={this.handleLogout} auth={auth} id="navbar-clone" />
      <Sidebar />
      <RoutesS />
    </React.Fragment>
  );

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ServiceApp);
