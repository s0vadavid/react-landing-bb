import React from "react";
import firebase from "firebase";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";

import styles from "./App.module.scss";

const App = (props) => {
  console.log('FIREBASE START:', firebase.database());

  const AppRouters = () => {
    return useRoutes([
      { path: "/", element: <ProductsList /> },
      { path: "location", element: <Location /> },
      { path: "aboutUs", element: <AboutUs /> },
    ]);
  };

  return (
    <main>
      <div className={styles.appContainer}>
        <Router>
          <Header />

          <AppRouters />
        </Router>
      </div>
    </main>
  );
};

export default App;
