import React from "react";
import "./itemBarra.css";

const ItemBarra = ({ icono, titulo, descripcion, selected }) => {
  return (
    <li className={selected ? "nav_item selected" : "nav_item"}>
      <img className="item_icon" src={icono} alt="icon" />
      <div className="item_data">
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
      </div>
    </li>
  );
};

export default ItemBarra;
