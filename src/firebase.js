import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuV82T6BxAEyxAoD3UFWnMJV0idExaH84",
  authDomain: "netflix-dbc17.firebaseapp.com",
  projectId: "netflix-dbc17",
  storageBucket: "netflix-dbc17.appspot.com",
  messagingSenderId: "903731220411",
  appId: "1:903731220411:web:23ee030b58a9cd8837fe9e",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
