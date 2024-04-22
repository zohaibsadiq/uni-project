import React from "react";
import ReactDOM from "react-dom";
import Hero from "./layout/Hero";
import HowWork from "./layout/HowWork";
import Navbar from "./layout/Navbar";
import TopServices from "./layout/TopServices";
import TrendingServices from "./layout/TrendingServices";
import "./style/index.css";
import WhyChoose from "./layout/WhyChoose";
import Testimoial from "./layout/Testimoial";
import Complain from "./layout/Complain";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopServices />
      <TrendingServices />
      <HowWork />
      <WhyChoose/>
      <Testimoial/> 
       <Complain/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
