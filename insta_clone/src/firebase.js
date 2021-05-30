import firebase from "firebase/app";
import "firebase/firestore";
require('firebase/auth');
require('firebase/storage');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDe4yLsTML8uP4Z9okIFrUP8ZxT-5iKZng",
    authDomain: "insta-clone-b4b25.firebaseapp.com",
    projectId: "insta-clone-b4b25",
    storageBucket: "insta-clone-b4b25.appspot.com",
    messagingSenderId: "777904431817",
    appId: "1:777904431817:web:c8639a07bd2ce1b7eea318",
    measurementId: "G-4ZN291QN41"
  });
  
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth, storage};