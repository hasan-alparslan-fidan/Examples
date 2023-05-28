import { combineReducers } from "redux";
import services from "./services.js";
import selectedService from "./selectedService.js";
import auth from "./auth.js";
import offers from "./offers.js";

const serviceApp = combineReducers({ offers, services, selectedService, auth });

export const getMessages = state => state.auth.user.messages

export default serviceApp;
