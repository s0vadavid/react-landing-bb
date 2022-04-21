import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
