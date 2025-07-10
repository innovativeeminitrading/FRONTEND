// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-dtTCavEWJBpKps18sErmKknEv3zhPD4",
  authDomain: "fir-innovativeemini.firebaseapp.com",
  projectId: "fir-innovativeemini",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
