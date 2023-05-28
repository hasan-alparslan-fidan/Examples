import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGFjle17DSPf4ieqTPqDCgUgYpzNrAkYs",
  authDomain: "dojo-app-26d98.firebaseapp.com",
  projectId: "dojo-app-26d98",
  storageBucket: "dojo-app-26d98.appspot.com",
  messagingSenderId: "118729141167",
  appId: "1:118729141167:web:6124c456b1a0019d995d5a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp.now();

export { projectFirestore, projectAuth, projectStorage, timestamp };
