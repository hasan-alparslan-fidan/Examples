import * as api from "api";
import {
  COLLABORATION_CREATED_FROM_OFFER,
  FETCH_USER_MESSAGES_SUCCESS,
} from "types";

//making new collab in the database, returning the id
//make a deal-pages background
export const collaborate =
  ({ collaboration, message }) =>
  (dispatch) =>
    api.createCollaboration(collaboration).then((collabId) => {
      message.cta = `/collaborations/${collabId}`;
      api.sendMessage(message);
      api.markOfferAsInCollaboration(collaboration.fromOffer);
      dispatch({
        type: COLLABORATION_CREATED_FROM_OFFER,
        offerId: collaboration.fromOffer,
        offersType: "sent",
      });
      return collabId;
    });

//sub to a chat
export const subscribeToMessages = (userId) => (dispatch) =>
  api.subscribeToMessages(userId, (messages) =>
    dispatch({ type: FETCH_USER_MESSAGES_SUCCESS, messages })
  );

//mark a message as read
export const markMessageAsRead = (message) => api.markMessageAsRead(message);

export const fetchCollaborations = (userId) => api.fetchCollaborations(userId);
