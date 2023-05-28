import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbc-NXdej36fkqJJnpDK0Z78iFN7SYmsE",
  authDomain: "servicario-edbde.firebaseapp.com",
  projectId: "servicario-edbde",
  storageBucket: "servicario-edbde.appspot.com",
  messagingSenderId: "436490687601",
  appId: "1:436490687601:web:1c4917763fd7e0ce62f7d0",
  measurementId: "G-HPC1Y7CM2J",
};
// initialize firebase
firebase.initializeApp(firebaseConfig);


const projectFirestore= firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();



const timestamp = firebase.firestore.Timestamp.now();

export { timestamp, projectFirestore, projectAuth, projectStorage };
