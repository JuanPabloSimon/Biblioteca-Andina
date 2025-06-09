import React from "react";

import "./header.css";

const Header = () => {
  return (
    <header>
      <h1 className="titulos">¡Te damos la bienvenida!</h1>
      <nav id="seccion_botones">
        <button className="boton_secciones boton_activo">Catálogo</button>
        <button className="boton_secciones">Préstamos</button>
        <button className="boton_secciones">Usuarios</button>
      </nav>
    </header>
  );
};

export default Header;
