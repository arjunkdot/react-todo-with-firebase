import firebase from "firebase";

var firebaseConfig = {
  //Put your keys here
};

firebase.initializeApp(firebaseConfig);

const conn = firebase.firestore();

export { conn };
