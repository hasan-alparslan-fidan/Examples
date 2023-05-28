import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
//actions
import { login } from "actions";
import { Link } from "react-router-dom";

//toaster & navigate
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

import onlyGuest from "components/hoc/onlyGuest.js"

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [redirect, setRedirect] = useState(false);

  const onLogin = (loginData) => {
    login(loginData).then(
      (x) => {
        console.log("DATA : ",x);
        setRedirect(true);
      },
      (errorMessage) => {
        toast(errorMessage, { duration: 4000 });
      }
    );
  };

  if (redirect) {
    return <Navigate to="/"   />;
  }

  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img
                src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                width="128"
                height="128"
                alt="Company Logo"
              />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="field">
                <div className="control">
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autoFocus=""
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    {...register("password", { required: true })}
                    name="password"
                    className="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="button is-block is-info is-large is-fullwidth"
              >
                Sign In
              </button>
            </form>
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
export default onlyGuest(Login);


