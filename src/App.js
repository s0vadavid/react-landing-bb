import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import firebase from "firebase";

const App = (props) => {
  console.log(firebase.database());
  return (
    <main>
      <div className="bigWrapper">
        <Header />
      </div>
    </main>
  );
};

export default App;
