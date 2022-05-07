import "./App.css";
import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import db from "./firebase.config.js";

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
  return (
    <main>
      <div className="bigWrapper">
        <Header />
      </div>
    </main>
  );
};

export default App;
