import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOXOPiJohMg0uqrRe70HU-dY75qMzywCg",
  authDomain: "mymoney-c6c56.firebaseapp.com",
  projectId: "mymoney-c6c56",
  storageBucket: "mymoney-c6c56.appspot.com",
  messagingSenderId: "293278330877",
  appId: "1:293278330877:web:4d7d8323b406f650a27394",
};
//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamps
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp };
