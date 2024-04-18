import React from "react";
import ReactDOM from "react-dom";
import Hero from "./component/Hero";
import Header from "./component/Navbar";
import "./style/index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
