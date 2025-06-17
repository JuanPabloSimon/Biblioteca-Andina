import React from "react";
import "./cardLibro.css";
import icono_editar from "../../../assets/icono_editar.svg";
import { Link } from "react-router-dom";

const CardLibro = ({ id_libro, imagen, titulo, ejemplares, editorial }) => {
  return (
    <div className="card_libro">
      <img className="imagen_libro" src={imagen} alt="" />
      <b className="card_titulo">{titulo}</b>
      <section className="card_descripcion">
        <p className="card_editorial texto_card">{editorial}</p>
        <hr />
        <p className="card_ejemplares texto_card"> {ejemplares} ejemplares</p>
      </section>
      <Link to={`/editar/${id_libro}`} className="card_boton">
        <img src={icono_editar} alt="" />
        Editar Item
      </Link>
    </div>
  );
};

export default CardLibro;
