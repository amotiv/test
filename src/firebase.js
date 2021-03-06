import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA73FOC2K7b2P2yioe8FSnQW9mX5xoUOSY",
  authDomain: "glient.firebaseapp.com",
  projectId: "glient",
  storageBucket: "glient.appspot.com",
  messagingSenderId: "424960871780",
  appId: "1:424960871780:web:d8abe8d67413e863e3be71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider,storage };