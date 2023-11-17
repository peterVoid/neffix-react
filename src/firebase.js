// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjUndSjWFvTYs8COkyvIiG5Hcp4nwNmrQ",
  authDomain: "neffix-3839a.firebaseapp.com",
  projectId: "neffix-3839a",
  storageBucket: "neffix-3839a.appspot.com",
  messagingSenderId: "594612114257",
  appId: "1:594612114257:web:13336db7a7fe6cc67b7970",
};

// REACT_APP_FIREBASE_API_KEY = AIzaSyCLcayIcX14YRSWZN15J4qU8F36KUUSwW8
// REACT_APP_FIREBASE_AUTH_DOMAIN = neffix-react.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID = neffix-react
// REACT_APP_FIREBASE_STORAGE_BUCKET = neffix-react.appspot.com
// REACT_APP_MESSAGING_SENDER = 91948558635
// REACT_APP_APP_ID = 1:91948558635:web:cc7ac41b95a5daa1193d6e
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
