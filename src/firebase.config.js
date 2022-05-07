import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDskFbdqUGz1c0KArAU7zzu4kd1XVQtd-0",
  authDomain: "project-seller-bb.firebaseapp.com",
  databaseURL:
    "https://project-seller-bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-seller-bb",
  storageBucket: "project-seller-bb.appspot.com",
  messagingSenderId: "260577557051",
  appId: "1:260577557051:web:1c9e9a4c0493f782a93a1e",
  measurementId: "G-VTR5RNG6D4",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
