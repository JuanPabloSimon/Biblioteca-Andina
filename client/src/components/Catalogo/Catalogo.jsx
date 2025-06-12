import React from "react";
import "./catalogo.css";
import HeaderCatalogo from "../HeaderCatalogo/HeaderCatalogo";
import CardList from "../CardList/CardList";

const Catalogo = () => {
  return (
    <div>
      <HeaderCatalogo />
      <CardList />
    </div>
  );
};

export default Catalogo;
