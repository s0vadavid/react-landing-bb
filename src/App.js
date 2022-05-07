import React, {useState, useEffect} from "react";
import db from "./firebase.config.js";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";

import styles from "./App.module.scss";

const App = (props) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    void fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
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

  const AppRouters = () => {
    return useRoutes([
      { path: "/", element: <ProductsList products={products} /> },
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
