import CardLibro from "../CardLibro/CardLibro";
import "./cardList.css";

import { useEffect, useState } from "react";
import AgregarLibroCard from "../AgregarLibro/AgregarLibroCard";

const CardList = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/libros", {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        setDatos(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="list_contenedor">
      {/* Agregar boton para añadir libros acá */}
      <AgregarLibroCard />
      {datos.map((el) => {
        return (
          <CardLibro
            key={el.idLibros}
            id_libro={el.idLibros}
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
