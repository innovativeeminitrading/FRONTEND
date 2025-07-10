const firebase = require('firebase/app');
require('firebase/auth');

// 🔐 Replace this with your Firebase config object
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);

// 🔑 Replace with your test email/password from Firebase Auth
const email = "your@email.com";
const password = "yourpassword";

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
