import firebase from "firebase/compat/app"
import "firebase/compat/database"

const onConnectionChanges = () => {


firebase.database().ref(".info/connected").on("value", (snapshot) => {snapshot.val()})

}