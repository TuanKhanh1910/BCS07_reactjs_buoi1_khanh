import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./Components/Banner";
import Foooter from "./Components/Foooter";
import Header from "./Components/Header";
import Item from "./Components/Item";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="bg-dark">
      <Header />
    </div>
    <div className="container my-5 bg-light p-5 text-center">
      <Banner />
    </div>
    <div className="container my-5">
      <Item />
    </div>
    <div className="bg-dark">
      <Foooter />
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
