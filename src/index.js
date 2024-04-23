import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import AboutUs from "./layout/routes/aboutUs";
import Home from "./layout/routes/home"; // Fix the casing of the file name
import "./style/index.css";
// import AboutUs from "./layout/routes/aboutUs";
import Navbar from "./layout/landingPage/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <div>
       {/* <Navbar/> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutUs" Component={AboutUs} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
