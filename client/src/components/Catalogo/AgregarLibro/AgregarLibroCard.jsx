import "./agregarLibroCard.css";
import add_item from "../../../assets/icono_mas.svg";

const AgregarLibroCard = () => {
  return (
    <div id="agregar_libro_container">
      <img src={add_item} alt="" />
      <p>Agregar nuevo ejemplar</p>
    </div>
  );
};

export default AgregarLibroCard;
