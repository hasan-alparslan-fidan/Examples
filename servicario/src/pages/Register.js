import React, { useState } from "react";
import RegisterForm from "components/auth/RegisterForm";

import { register } from "../actions/index";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

import { Link } from "react-router-dom";

import onlyGuest from "components/hoc/onlyGuest.js";
const Register = (props) => {
  const [redirect, setRedirect] = useState(false);

  const registerUser = (userData) => {
    register(userData).then(
      (_) => {
        setRedirect(true);
      },
      (errorMessage) => {
        toast(errorMessage, { duration: 4000 });
      }
    );
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Register</h3>
          <p className="subtitle has-text-grey">Please Register to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img
                src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                width="128"
                height="128"
                alt="Company Logo"
              />
            </figure>
            <RegisterForm onRegister={registerUser} />
          </div>
          <p className="has-text-grey">
            <Link>Sign In With Google</Link>&nbsp;
            <Link href="/">Sign Up</Link> &nbsp;·&nbsp;
            <Link href="../">Need Help?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

//check auth down here
export default onlyGuest(Register);
