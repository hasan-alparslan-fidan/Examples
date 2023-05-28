import {
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICES_SUCCESS,
  REQUEST_SERVICE,
  FETCH_USER_SERVICES_SUCCESS,
} from "types/index.js";

import * as api from "../api/index";

//SERVICES STARTS

//FETCH ALL SERVICES BY ID
export const fetchServices = () => (dispatch) =>
  api.fetchServices().then((services) =>
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      services: services,
    })
  );

//FETCH ALL THE SERVICES BELONGING TO A CERTAIN USER
export const fetchUserServices = (userId) => (dispatch) =>
  //adding the collected services from api to the state, down here
  api
    .fetchUserServices(userId)
    .then((services) =>
      dispatch({ type: FETCH_USER_SERVICES_SUCCESS, services })
    );

//FETCH SINGLE SERVICE BY ID
export const fetchServiceById = (serviceId) => (dispatch, getState) => {
  const lastService = getState().selectedService.item;

  if (lastService.id && lastService.id === serviceId) {
    return Promise.resolve();
  }
  
  dispatch({ type: REQUEST_SERVICE });
  return api
    .fetchServiceById(serviceId)
    .then(async (service) => {
    service.user = await api.getUserProfile(service.user);
    dispatch({
      type: FETCH_SERVICE_SUCCESS,
      service,
    });
  });
};

//create single service using the method from api page
export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10);
  newService.user = userId;

  return api.createService(newService);
};
