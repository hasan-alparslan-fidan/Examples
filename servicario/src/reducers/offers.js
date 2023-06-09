import { combineReducers } from "redux";
import {
  CHANGE_OFFER_STATUS,
  FETCH_OFFERS_SUCCESS,
  COLLABORATION_CREATED_FROM_OFFER,
} from "types";
const createOfferList = (offersType) => {
  return (state = [], action) => {
    if (action.offersType !== offersType) {
      return state;
    }

    switch (action.type) {
      case FETCH_OFFERS_SUCCESS:
        return action.offers;
      case CHANGE_OFFER_STATUS:
        const nextState = [...state];
        const offerIndex = nextState.findIndex((o) => o.id === action.offerId);
        nextState[offerIndex].status = action.status;
        return nextState;

      case COLLABORATION_CREATED_FROM_OFFER:
        const nextState2 = [...state];
        const offerIndex2 = nextState2.findIndex(
          (o) => o.id === action.offerId
        );
        nextState2[offerIndex2].collaborationCreated = true;
        return nextState2;

      default:
        return state;
    }
  };
};

const offers = combineReducers({
  received: createOfferList("received"),
  sent: createOfferList("sent"),
});

export default offers;
