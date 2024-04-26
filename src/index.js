import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./layout/routes/aboutUs";
import contactUs from "./layout/routes/contactUs";
import Home from "./layout/routes/home";
import Service from "./layout/routes/services";
import "./style/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutUs" Component={AboutUs} />
          <Route path="/contactUs" Component={contactUs} />
          <Route path="/services/:id" Component={Service} />
        </Routes>
       
      </div>
     </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
