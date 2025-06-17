import React from "react";
import "./headerCatalogo.css";

import icono_mas from "../../../assets/icono_mas.svg";

const HeaderCatalogo = () => {
  return (
    <div id="header_catalogo">
      <section id="opc_container">
        <ul id="opc_catalogo">
          <li className="li_catalogo selected2">Todos los libros</li>
          <li className="li_catalogo ">Autor</li>
          <li className="li_catalogo ">Género</li>
          <li className="li_catalogo ">Año</li>
        </ul>
        <button id="boton_categoria">
          <img src={icono_mas} alt="" />
          Agregar Subcategoría
        </button>
      </section>
      <input id="buscador_libros" type="text" name="" placeholder="Buscar..." />
    </div>
  );
};

export default HeaderCatalogo;
