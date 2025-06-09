import React from "react";
import "./cardLibro.css";
import icono_editar from "../../assets/icono_editar.svg";

const CardLibro = () => {
  return (
    <div className="card_libro">
      <div className="fakeFoto">foto¿?</div>
      <b className="card_titulo">Titulo</b>
      <section className="card_descripcion">
        <p className="card_editorial texto_card">Editorial</p>-
        <p className="card_ejemplares texto_card">Ejemplares</p>
      </section>
      <button className="card_boton">
        <img src={icono_editar} alt="" />
        Editar Item
      </button>
    </div>
  );
};

export default CardLibro;
