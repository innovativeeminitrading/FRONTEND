const firebase = require('firebase/app');
require('firebase/auth');

// 🔐 Replace this with your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyC-dTtCavEwJBpKps1BsErmKknEv3zhPD4",
  authDomain: "fir-innovative mini.firebaseapp.com",
  projectId:"fir-innovativeemini",
};
firebase.initializeApp(firebaseConfig);

// 🔑 Replace with your test email/password from Firebase Auth
const email = "fordhamrobert733@gmail.com";
const password = "Base_1924";

firebase.auth().signInWithEmailAndPassword(email, password)
  .then(userCredential => {
    return userCredential.user.getIdToken();
  })
  .then(idToken => {
    console.log("\n✅ Your Firebase ID Token:\n");
    console.log(idToken);
  })
  .catch(error => {
    console.error("\n❌ Error logging in:", error.message);
  });
