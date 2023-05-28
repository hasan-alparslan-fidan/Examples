import { projectFirestore } from "db";

//making new chat-box
export const createCollaboration = (collab) =>
  projectFirestore
    .collection("collaborations")
    .add(collab)
    .then((docRef) => docRef.id);

//message sending function
export const sendMessage = (message) =>
  projectFirestore
    .collection("profiles")
    .doc(message.toUser)
    .collection("messages")
    .add(message);

//sub to a channel, follow up the new messages
export const subscribeToMessages = (userId, callback) =>
  projectFirestore
    .collection("profiles")
    .doc(userId)
    .collection("messages")
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    });

export const markMessageAsRead = (message) => {
  projectFirestore
    .collection("profiles")
    .doc(message.toUser)
    .collection("messages")
    .doc(message.id)
    .update({ isRead: true });
};

export const fetchCollaborations = (userId) => {
  console.log("userid : ",userId);
 return projectFirestore
    .collection("collaborations")
    .where("allowedPeople", "array-contains", userId)
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
};
