console.log("✅ Script started...");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // path to your downloaded key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Get UID from Firebase (by email)
admin.auth().getUserByEmail("fordhamrobert733@gmail.com")
  .then(userRecord => {
    console.log("✅ UID:", userRecord.uid);
    return admin.auth().createCustomToken(userRecord.uid);
  })
  .then(customToken => {
    console.log("🔥 Firebase Custom Token:", customToken);
  })
  .catch(error => {
    console.error("❌ Error:", error);
  });