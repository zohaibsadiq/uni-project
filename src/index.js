import React from "react";
import ReactDOM from "react-dom";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import "./style/index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
