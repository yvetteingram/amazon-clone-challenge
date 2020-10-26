// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC54Jnt8O0-4JtEJGYt3g5qE_bANrd1H4w",
  authDomain: "challenge-223f2.firebaseapp.com",
  databaseURL: "https://challenge-223f2.firebaseio.com",
  projectId: "challenge-223f2",
  storageBucket: "challenge-223f2.appspot.com",
  messagingSenderId: "696972260163",
  appId: "1:696972260163:web:d6a8c34f49eaf97152f5f6",
  measurementId: "G-LNV0YYS3YR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };