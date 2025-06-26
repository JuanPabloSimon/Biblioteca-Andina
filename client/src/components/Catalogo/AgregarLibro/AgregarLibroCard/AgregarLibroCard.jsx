import "./agregarLibroCard.css";
import add_item from "../../../../assets/icono_mas.svg";
import { Link } from "react-router-dom";

const AgregarLibroCard = () => {
  // const agregarLibro = () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/libros", {
  //       method: "POST",
  //       mode: "cors",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         Titulo:
  //       })
  //     })
  //   } catch (error) {

  //   }
  // }

  return (
    <Link to="/agregar_libro" id="agregar_libro_container">
      <img src={add_item} alt="" />
      <p>Agregar nuevo ejemplar</p>
    </Link>
  );
};

export default AgregarLibroCard;
