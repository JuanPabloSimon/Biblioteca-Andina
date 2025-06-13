import React from "react";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="titulos">¡Te damos la bienvenida!</h1>
      <nav id="seccion_botones">
        <Link to="/catalogo" className="boton_secciones boton_activo">
          Catálogo
        </Link>
        <button className="boton_secciones">Préstamos</button>
        <button className="boton_secciones">Usuarios</button>
      </nav>
    </header>
  );
};

export default Header;
