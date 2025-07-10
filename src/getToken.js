// src/getToken.js
import { auth, signInWithEmailAndPassword } from './firebase';

const email = "fordhamrobert733@gmail.com";
const password = "Base_1924";

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    return userCredential.user.getIdToken();
  })
  .then(idToken => {
    console.log("✅ Your Firebase ID Token:");
    console.log(idToken);
  })
  .catch(error => {
    console.error("❌ Error logging in:", error);
  });