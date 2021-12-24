import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqsFOecMAOn2uYvnG9gmwBy1lfAEWr2jQ",
  authDomain: "arredo-auth.firebaseapp.com",
  projectId: "arredo-auth",
  storageBucket: "arredo-auth.appspot.com",
  messagingSenderId: "173501507204",
  appId: "1:173501507204:web:f3b152f9a497ec22d5c4d1"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;