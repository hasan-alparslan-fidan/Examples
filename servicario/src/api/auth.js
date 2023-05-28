import { projectFirestore } from "../db/index.js";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//AUTH BEGIN//

const createUserProfile = (userProfile) => {
  return projectFirestore
    .collection("profiles")
    .doc(userProfile.uid)
    .set(userProfile);
};

export const register = async ({ email, password, fullName, avatar }) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      description: "",
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => Promise.reject(error.message));
};

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanged = (onAuthCallBack) =>
  firebase.auth().onAuthStateChanged(onAuthCallBack);

export const getUserProfile = (uid) =>
  projectFirestore
    .collection("profiles")
    .doc(uid)
    .get()
    .then((snapshot) => ({ uid, ...snapshot.data() }));

//AUTH END //
