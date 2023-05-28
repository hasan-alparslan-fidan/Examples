// imports
import React from "react";
import { useForm } from "react-hook-form";

//helpers
import { isValidImage, isValidUrl , sameAs } from "helpers/validators";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onRegister)}>
      <div className="field">
        <div className="control">
          <input
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            name="email"
            className="input is-large"
            type="email"
            placeholder="Your Email"
            autoComplete="email"
          />
          <div className="form-error">
            {errors.email?.type === "required" && (
              <span className="help is-danger">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="help is-danger">Email address is not valid</span>
            )}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("fullName", { required: true, minLength: 10 })}
            name="fullName"
            className="input is-large"
            type="text"
            placeholder="Full Name"
          />

          <div className="form-error">
            {errors.fullName?.type === "required" && (
              <span className="help is-danger">Name is required</span>
            )}
            {errors.fullName?.type === "minLength" && (
              <span className="help is-danger">Name is not valid</span>
            )}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("avatar", {
              required: true,
              validate: { isValidImage, isValidUrl },
            })}
            name="avatar"
            className="input is-large"
            type="text"
            placeholder="Avatar"
          />

          <div className="form-error">
            {errors.avatar?.type === "required" && (
              <span className="help is-danger">Avatar is required</span>
            )}
            {errors.avatar?.type === "isValidImage" && (
              <span className="help is-danger">
                Avatar image extension is not valid
              </span>
            )}
            {errors.avatar?.type === "isValidUrl" && (
              <span className="help is-danger">Avatar url is not valid</span>
            )}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("password", { required: true, minLength: 6 })}
            name="password"
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
          />

          <div className="form-error">
            {errors.password?.type === "required" && (
              <span className="help is-danger">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="help is-danger">
                Minimum 6 characters required
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("passwordConfirmation", {
              required: true,
              minLength: 6,
              validate: {sameAs : sameAs(getValues,"password")}
            })}
            name="passwordConfirmation"
            className="input is-large"
            type="password"
            placeholder="Repeat Password"
            autoComplete="current-password"
          />

          <div className="form-error">
            {errors.passwordConfirmation?.type === "required" && (
              <span className="help is-danger">Password is required</span>
            )}
            {errors.passwordConfirmation?.type === "minLength" && (
              <span className="help is-danger">
                Minimum 6 characters required
              </span>
            )}
            {errors.passwordConfirmation?.type === "sameAs" && (
              <span className="help is-danger">
                Passwords do not match
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
