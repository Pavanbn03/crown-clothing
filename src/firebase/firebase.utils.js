import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

// const firebase = require('firebase/firebase')
const config = {
  apiKey: "AIzaSyCVwZ7KFsZW-D79m0708YO40Wb3qzQOQNo",
  authDomain: "crown-db-32445.firebaseapp.com",
  projectId: "crown-db-32445",
  storageBucket: "crown-db-32445.appspot.com",
  messagingSenderId: "313855768446",
  appId: "1:313855768446:web:a29669e0609b9f356ea52f",
  measurementId: "G-40XF9FEWR6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
