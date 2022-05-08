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

const App = (props) => {
  const [ products, setProducts ] = useState([]);
  const [ locals, setLocals ] = useState([]);
  const [ local, setLocal ] = useState('en');
  const value = useMemo(
    () => ({ local, setLocal }),
    [local]
  );

  useEffect(() => {
    void getProducts()
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

    const localisations = Object.keys(dataProducts[0]).filter((loc) => loc !== "id");
    setLocals(localisations)
    setProducts(dataProducts)
  }

  const AppRouters = () => {
    return useRoutes([
      { path: "/", element: <ProductsList products={products} /> },
      { path: "location", element: <Location /> },
      { path: "aboutUs", element: <AboutUs /> },
    ]);
  };

  return (
    <ContextLocalization.Provider value={value}>
      <main>
        <div className={styles.appContainer}>
          <Router>
            <Header locals={locals}/>

            <AppRouters />
          </Router>
        </div>
      </main>
    </ContextLocalization.Provider>
  );
};

export default App;
