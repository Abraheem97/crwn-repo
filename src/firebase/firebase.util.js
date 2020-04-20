import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIDI11QjEy58SrhuDtxqmWJhFT72pOd0g",
  authDomain: "crwn-db-cf5d7.firebaseapp.com",
  databaseURL: "https://crwn-db-cf5d7.firebaseio.com",
  projectId: "crwn-db-cf5d7",
  storageBucket: "crwn-db-cf5d7.appspot.com",
  messagingSenderId: "264828930779",
  appId: "1:264828930779:web:c142ac1d8d2e2014999afe",
  measurementId: "G-0BM83PKEWB",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
