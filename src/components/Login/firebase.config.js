// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLMIi0PLcP7l4JZ6mQdchCLEN5DOkcHhY",
  authDomain: "my-volunteer-network.firebaseapp.com",
  databaseURL: "https://my-volunteer-network.firebaseio.com",
  projectId: "my-volunteer-network",
  storageBucket: "my-volunteer-network.appspot.com",
  messagingSenderId: "656862916181",
  appId: "1:656862916181:web:7af8d493d24aa8c0172edc",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
