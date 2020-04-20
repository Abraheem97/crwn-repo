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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //UserAuth is the object returned when we sign in via firebase ( the whole big object)

  const userRef = firestore.doc(`users/${userAuth.uid}`); //UserRef always returns an object from firebase database if it exists or not
  const snapshot = await userRef.get(); //UserRef.get() returns a snapshot which has a value of exists which tells if that particular record exists or not

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        //userRef.set() will create a record for this doc (userRef.doc )`users/${userAuth.uid}` with whatever params you pass
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }

  return userRef; // Return user ref component so we can get the data using UserRef.onSnapshot(snapShot => snapShot.data())
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
