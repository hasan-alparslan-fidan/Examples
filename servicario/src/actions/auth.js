import {
  SET_AUTH_USER,
  RESET_AUTH_STATE,
} from "types/index.js";

import * as api from "../api/index";

//register
export const register = (registerFormData) =>
  api.register({ ...registerFormData });

//login function
export const login = (loginData) => api.login({ ...loginData });

//logout function
export const logout = () => (dispatch) =>
  api.logout().then((_) => dispatch({ user: null, type: SET_AUTH_USER }));

//notify the states on auth change
export const onAuthStateChanged = (onAuthCallBack) =>
  api.onAuthStateChanged(onAuthCallBack);

//storing the auth on redux
export const storeAuthUser = (authUser) => (dispatch) => {
  if (authUser) {
    return api
      .getUserProfile(authUser.uid)
      .then((userWithProfile) =>
        dispatch({ user: userWithProfile, type: SET_AUTH_USER })
      );
  } else {
    //dispatching the data to entire app tree
    return dispatch({ user: null, type: SET_AUTH_USER });
  }
};

//RESET AUTH STATE
export const resetAuthState = () => ({ type: RESET_AUTH_STATE });

//AUTH ENDS
