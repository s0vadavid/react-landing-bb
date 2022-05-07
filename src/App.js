import React from "react";
import firebase from "firebase";
import Header from "./components/Header/Header";

import styles from "./App.module.scss";

const App = (props) => {
  console.log('FIREBASE START:', firebase.database());
  return (
    <main>
      <div className={styles.appContainer}>
        <Header />
      </div>
    </main>
  );
};

export default App;
