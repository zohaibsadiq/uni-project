import React from "react";
import ReactDOM from "react-dom";
import Hero from "./layout/Hero";
import Navbar from "./layout/Navbar";
import TopServices from "./layout/TopServices";
import "./style/index.css";
import TrendingServices from "./layout/TrendingServices";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopServices/>
      <TrendingServices/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
