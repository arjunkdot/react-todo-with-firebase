import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAPBcKRSJzg0EgTe2LFc-hg3_bZedo_otg",
  authDomain: "todo-react-app-146cb.firebaseapp.com",
  projectId: "todo-react-app-146cb",
  storageBucket: "todo-react-app-146cb.appspot.com",
  messagingSenderId: "1042044268488",
  appId: "1:1042044268488:web:a4ce3981b6e6a8ee005afd",
};

firebase.initializeApp(firebaseConfig);

const conn = firebase.firestore();

export { conn };
