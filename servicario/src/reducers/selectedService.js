import { FETCH_SERVICE_SUCCESS, REQUEST_SERVICE } from "types/index.js";
import { combineReducers } from "redux";

const initSelectedService = () => {
  const item = (state = {}, action) => {
    switch (action.type) {
      case FETCH_SERVICE_SUCCESS:
        return action.service;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case REQUEST_SERVICE:
        return true;
      case FETCH_SERVICE_SUCCESS:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({ item, isFetching });
};
//  item , isfetching cart curt verilerini burdan alıyoz,

const selectedService = initSelectedService();

export default selectedService;
