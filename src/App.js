import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import db from "./firebase.config.js";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";

import styles from "./App.module.scss";

const App = (props) => {
  const [blogs,setBlogs]=useState([]);
  const fetchBlogs=async()=>{
    const response=db.collection('Products');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
}
useEffect(() => {
  fetchBlogs();
}, [])
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
