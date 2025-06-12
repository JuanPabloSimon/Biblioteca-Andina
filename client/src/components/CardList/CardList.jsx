import CardLibro from "../CardLibro/CardLibro";
import "./cardList.css";

import libros from "../../utils/libros.json";

const CardList = () => {
  return (
    <div id="list_contenedor">
      {/* Agregar boton para añadir libros acá */}
      {libros.map((el) => {
        return (
          <CardLibro
            imagen={el.imagen}
            titulo={el.Titulo}
            ejemplares={el.ejemplares}
            editorial={el.editorial}
          />
        );
      })}
    </div>
  );
};

export default CardList;
