import React from "react";
import ReactDOM from "react-dom";
import Hero from "./layout/Hero";
import HowWork from "./layout/HowWork";
import Navbar from "./layout/Navbar";
import TopServices from "./layout/TopServices";
import TrendingServices from "./layout/TrendingServices";
import "./style/index.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopServices />
      <TrendingServices />
      <HowWork />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
