import { projectFirestore } from "db";

export const createOffer = (offer) =>
  projectFirestore.collection("offers").add(offer);

export const fetchSentOffers = (userId) => {
  const userRef = "profiles/" + userId;
  return projectFirestore
    .collection("offers")
    .where("fromUser", "==", userRef)
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
};

export const fetchReceivedOffers = (userId) => {
  const userRef = "profiles/" + userId;
  return projectFirestore
    .collection("offers")
    .where("toUser", "==", userRef)
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
};

export const changeOfferStatus = (offerId, status) => {
  return projectFirestore.collection("offers").doc(offerId).update({ status });
};
export const markOfferAsInCollaboration = (offerId) =>
  projectFirestore
    .collection("offers")
    .doc(offerId)
    .update({ collaborationCreated: true });
