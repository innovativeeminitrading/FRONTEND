// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyC-dTcavEwJBpKs1BsErmKKnEv3zhhPD4",
  authDomain: "fir-innovativeemini.firebaseapp.com",
  projectId: "fir-innovativeemini",
  storageBucket: "fir-innovativeemini.appspot.com",
  messagingSenderId: "1093077260260",
  appId: "1:1093077260260:web:bcc3c5ce1fbe0deceb59f1",
  measurementId: "G-YK4455PDBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

// Export auth instance
export { auth };
