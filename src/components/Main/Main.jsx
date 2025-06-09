import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Catalogo from "../Catalogo/Catalogo";

const Main = () => {
  return (
    <div id="main">
      <Header />
      <hr id="divisor" />
      <Catalogo />
    </div>
  );
};

export default Main;
