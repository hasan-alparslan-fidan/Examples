import { FETCH_OFFERS_SUCCESS, CHANGE_OFFER_STATUS } from "types";

import * as api from "api";

export const createOffer = (offer) => api.createOffer(offer);

const extractDataFromOffer = async (offer, userType) => {
  const service = await offer.service;
  const user = await offer[userType];
  const toUser = await offer.toUser;

  //instead of using reference, transforming it manually to objects, passing it down
  //trim it
  const x = service.substring(service.indexOf("/") + 1);
  const y = user.substring(user.indexOf("/") + 1);
  const z = toUser.substring(toUser.indexOf("/") + 1);

  const newx = await api.fetchServiceById(x);
  const newy = await api.getUserProfile(y);
  const newz = await api.getUserProfile(z);

  offer.service = newx;
  offer[userType] = newy;
  offer.toUser = newz;

  return offer;
};

//GET offers sent by current user
export const fetchSentOffers = (userId) => (dispatch) => {
  return api.fetchSentOffers(userId).then(async (offers) => {
    const mappedOffers = await Promise.all(
      offers.map((offer) => extractDataFromOffer(offer, "toUser"))
    );

    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers: mappedOffers,
      offersType: "sent",
    });
    return mappedOffers;
  });
};

//GET offers sent to current user
export const fetchReceivedOffers = (userId) => (dispatch) => {
  return api.fetchReceivedOffers(userId).then(async (offers) => {
    const mappedOffers = await Promise.all(
      offers.map((offer) => extractDataFromOffer(offer, "fromUser"))
    );
    dispatch({
      type: FETCH_OFFERS_SUCCESS,
      offers: mappedOffers,
      offersType: "received",
    });
    return mappedOffers;
  });
};

// accept the received offer
export const acceptOffer = (offerId) => (dispatch) => {
  api.changeOfferStatus(offerId, "accepted").then((_) =>
    dispatch({
      type: CHANGE_OFFER_STATUS,
      status: "accepted",
      offerId,
      offersType: "received",
    })
  );
};

//decline the received offer
export const declineOffer = (offerId) => (dispatch) => {
  api.changeOfferStatus(offerId, "declined").then((_) =>
    dispatch({
      type: CHANGE_OFFER_STATUS,
      status: "declined",
      offerId,
      offersType: "received",
    })
  );
};

//change the offers status from read to unread
export const changeOfferStatus = (offerId, status) => (dispatch) => {
  api.changeOfferStatus(offerId, status).then((_) =>
    dispatch({
      type: CHANGE_OFFER_STATUS,
      offerId,
      status,
      offersType: "received",
    })
  );
};
