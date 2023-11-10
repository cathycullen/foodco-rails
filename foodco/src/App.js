import './App.css';
import React from "react";
import axios from "axios";
import Products from "./components/products"
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/products"

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setProducts(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Products products={products} />
    </div>
  );
}

export default App;
