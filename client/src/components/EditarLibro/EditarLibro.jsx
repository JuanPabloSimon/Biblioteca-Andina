import { useEffect, useState } from "react";
import "./editarLibro.css";
import { Link, useParams } from "react-router-dom";

const EditarLibro = () => {
  const { id } = useParams();
  const [prestado, setPrestado] = useState(false);
  const [libro, setLibro] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    setBusqueda(newSearch);
  };

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/usuarios/", {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        console.log(result);

        setUsuarios(result.filter((el) => el.tipoRol == "lector"));
      } catch (err) {
        console.log(err.message);
      }
    };

    buscarUsuarios();
  }, [busqueda]);

  useEffect(() => {
    const buscarLibro = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/libros/${id}`, {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        setLibro(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    buscarLibro();
  }, []);

  return (
    <div id="editor_container">
      <section id="section_1">
        <h1 className="titulos">Editar Item</h1>
        <form action="">
          <label htmlFor="">Nombre</label>
          <input
            className="form_element"
            type="text"
            name=""
            id=""
            placeholder="Ingresar Nombre"
          />
          <label htmlFor="">Genero</label>
          <select className="form_element select" name="" id=""></select>
          <label htmlFor="">Autor</label>
          <input
            className="form_element"
            type="text"
            name=""
            id=""
            placeholder="Cambiar Autor"
          />
          <label htmlFor="">Estado</label>
          <select
            onChange={(e) => setPrestado(e.target.value)}
            className="form_element select"
            name=""
            id=""
          >
            <option className="option" selected disabled>
              Seleccione una opcion
            </option>
            <option value="false">Disponible</option>
            <option value="true">Prestamo</option>
          </select>
          {prestado == "true" ? (
            <>
              <label htmlFor="">Buscar por DNI</label>
              <input
                onChange={(e) => handleChange(e)}
                className="form_element"
                type="text"
                placeholder="Buscar..."
              />
              <section id="resultados_dni">
                {usuarios?.map((el) => {
                  return (
                    <div className="item_usuario" key={el.idUsuario}>
                      <p>{el.Nombre + " " + el.Apellido}</p>
                      <b>40234253</b>
                    </div>
                  );
                })}
              </section>
            </>
          ) : (
            <></>
          )}
        </form>
      </section>
      <section id="section_2">
        <section id="section_2_image">
          <h1>{libro.Titulo}</h1>
          <section id="section2_image_container">
            <section id="border_image">
              <img id="imagen_edicion" src={libro.imagen} alt="Hola" />
            </section>
          </section>
          <b>{libro.disponible ? "Disponible" : "Prestamo"}</b>
        </section>
        <section id="section_finalizar">
          {prestado == "true" ? (
            <>
              <button className="boton_editar generar_prestamo">
                Generar prestamo
              </button>
            </>
          ) : (
            <>
              <button className="boton_editar generar_prestamo hidden">
                Generar prestamo
              </button>
            </>
          )}

          <Link to="/catalogo" className="boton_editar cancelar">
            Cancelar
          </Link>
          <button className="boton_editar guardar">Guardar</button>
        </section>
      </section>
    </div>
  );
};

export default EditarLibro;
