import React from "react";
import "./barraNavegacion.css";
import ItemBarra from "../ItemBarra/ItemBarra";

// Iconos
import icono_biblio from "../../assets/icono_biblioteca.svg";
import icono_ayuda from "../../assets/icono_ayuda.svg";
import icono_personal from "../../assets/icono_personal.svg";
import icono_logOut from "../../assets/icono_logOut.svg";
import icono_configuracion from "../../assets/icono_configuracion.svg";
import icono_catalogo from "../../assets/icono_configuracion.svg";

const BarraNavegacion = () => {
  return (
    <nav id="nav_container">
      <section id="main_icon">
        <img id="icono_biblioteca" src={icono_biblio} alt="icono biblioteca" />
        <h1 className="titulos">Biblioteca Andina</h1>
      </section>
      <section id="barra">
        <ul>
          <ItemBarra
            icono={icono_catalogo}
            titulo="Incio"
            descripcion="Modifica items y disponibilidad"
            selected={true}
          />
          <ItemBarra
            icono={icono_personal}
            titulo="Personal"
            descripcion="Agrega o edita personal"
          />
          <ItemBarra
            icono={icono_ayuda}
            titulo="Ayuda"
            descripcion="Preguntas frecuentes"
          />
          <ItemBarra
            icono={icono_configuracion}
            titulo="Configuración"
            descripcion="Edita tu perfil"
          />
        </ul>
        <section id="logOut_section">
          <img src={icono_logOut} alt="logOut" />
          <h4>Cerrar Sesión</h4>
        </section>
      </section>
    </nav>
  );
};

export default BarraNavegacion;
