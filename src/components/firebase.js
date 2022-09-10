import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPSAm-yYJZszHpPmZkGpz_vwXdnvgYdAk",
  authDomain: "linkedinclone-9e202.firebaseapp.com",
  projectId: "linkedinclone-9e202",
  storageBucket: "linkedinclone-9e202.appspot.com",
  messagingSenderId: "1054882649832",
  appId: "1:1054882649832:web:d64f49b5c76d900b285b5d",
  measurementId: "G-8TD3HRCNV6",
};

//create/initialize firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//db and auth connections
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
