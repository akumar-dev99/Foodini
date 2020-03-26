var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("firebase/functions");

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB5-HFDTpmQObB5M4WetjCPF4fUSWlFzv0",
    authDomain: "foodini-app-177fc.firebaseapp.com",
    databaseURL: "https://foodini-app-177fc.firebaseio.com",
    projectId: "foodini-app-177fc",
    storageBucket: "foodini-app-177fc.appspot.com",
    messagingSenderId: "806957072245",
    appId: "1:806957072245:web:0e47c226c637e5eb19dd3c",
    measurementId: "G-GDCSYQ05MM"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
