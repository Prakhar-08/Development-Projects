import firebase from "firebase/app";
import "firebase/firestore";
require('firebase/auth');

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCW5kqWLrB-vaCMzLA_PdE9oD6HE8vthws",
    authDomain: "clone-2d89c.firebaseapp.com",
    projectId: "clone-2d89c",
    storageBucket: "clone-2d89c.appspot.com",
    messagingSenderId: "165413029903",
    appId: "1:165413029903:web:b2615dfbf85cbe202d7b7a",
    measurementId: "G-5KG32R42RM"
});

const auth = firebase.auth();

export {auth};