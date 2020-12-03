import { firebase } from '@firebase/app';
import '@firebase/firestore'
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

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;