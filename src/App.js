import React, { useState, useEffect, createContext, useMemo } from "react";
import db from "./firebase.config.js";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";

import styles from "./App.module.scss";

export const ContextLocalization = createContext({
  local: 'en',
  setLocal: () => {},
});

export const ContextLocalizationsData = createContext({
  localsData: {},
  setLocalsData: () => {},
});

const App = (props) => {
  const [ products, setProducts ] = useState([]);
  const [ systemLocal, setSystemLocal ] = useState([]);
  const [ locals, setLocals ] = useState([]);
  const [ local, setLocal ] = useState('en');
  const value = useMemo(
    () => ({ local, setLocal }),
    [local]
  );

  const [ localsData, setLocalsData ] = useState({});
  const localsSystemDataValue = useMemo(
    () => ({ localsData, setLocalsData }),
    [local]
  );

  useEffect(() => {
    void getProducts()
    void getSystem()
  }, [])

  const getProducts = async () => {
    const products = db.ref('Products');
    await products.get();
    let dataProducts = [];

    products.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        dataProducts.push(childSnapshot.val())
      });
    });

    setProducts(dataProducts)
  }

  const getSystem = async () => {
    const system = db.ref('System');
    await system.get();
    let dataSystem = {};

    system.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        dataSystem = childSnapshot.val()
      });
    });

    const localisations = Object.keys(dataSystem)
    setLocals(localisations)
    setSystemLocal(dataSystem)
  }

  const AppRouters = () => {
    return useRoutes([
      { path: "/", element: <ProductsList products={products} systemLocal={systemLocal} /> },
      { path: "location", element: <Location /> },
      { path: "aboutUs", element: <AboutUs /> },
    ]);
  };

  return (
    <ContextLocalization.Provider value={value}>
      <ContextLocalizationsData.Provider value={localsSystemDataValue}>
        <main>
          <div className={styles.appContainer}>
            <Router>
              <Header locals={locals} systemLocal={systemLocal} />

              <AppRouters />
            </Router>
          </div>
        </main>
      </ContextLocalizationsData.Provider>
    </ContextLocalization.Provider>
  );
};

export default App;
