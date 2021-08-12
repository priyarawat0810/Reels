import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDOCWnz-ym8-JlbHbn43YnTDQm_gap_DI8",
    authDomain: "reels-fdb44.firebaseapp.com",
    projectId: "reels-fdb44",
    storageBucket: "reels-fdb44.appspot.com",
    messagingSenderId: "960511242951",
    appId: "1:960511242951:web:ae3fb1159915e313ad44e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();

  let provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;