import { Link } from "react-router-dom";
import "./agregarLibroPage.css";
import { useEffect, useState } from "react";

const AgregarLibroPage = () => {
  const [generos, setGeneros] = useState([]);
  const [autores, setAutores] = useState([]);
  const [editoriales, setEditoriales] = useState([]);

  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/generos`, {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        setGeneros(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchGeneros();
  }, []);

  useEffect(() => {
    const fetchEditoriales = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/editoriales`, {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        setEditoriales(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEditoriales();
  }, []);

  useEffect(() => {
    const fetchAutores = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/autores`, {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        const result = await response.json();
        setAutores(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAutores();
  }, []);

  return (
    <div id="editor_container">
      <section id="section_1">
        <h1 className="titulos">Agergar Item</h1>
        <form id="form_agregar_Libros" action="">
          <section>
            <label htmlFor="">Nombre</label>
            <input
              className="form_element"
              type="text"
              name=""
              id=""
              placeholder="Ingresar Nombre"
            />
            <label htmlFor="">Genero</label>
            <select className="form_element select" name="" id="">
              {generos?.map((el) => {
                return <option key={el.idgenero}>{el.nombre}</option>;
              })}
            </select>
            <label htmlFor="">Imagen</label>
            <input
              className="form_element"
              type="text"
              name=""
              id=""
              placeholder="URL IMAGEN"
            />
            <label htmlFor="">Fecha de Publicación</label>
            <input
              className="form_element"
              type="date"
              name=""
              id=""
              placeholder="Ingrese ejemplares"
            />
          </section>
          <section id="">
            <label htmlFor="">Ejemplares </label>
            <input
              className="form_element"
              type="number"
              name=""
              id=""
              placeholder="Ingrese ejemplares"
            />
            <label htmlFor="">Editorial</label>
            <select className="form_element select" name="" id="">
              {editoriales?.map((el) => {
                return <option key={el.idEenero}>{el.nombre}</option>;
              })}
            </select>
            <label htmlFor="">Autor</label>
            <select className="form_element select" name="" id="">
              {autores?.map((el) => {
                return (
                  <option key={el.idAutor}>
                    {el.nombre + " "}
                    {el.apellido}{" "}
                  </option>
                );
              })}
            </select>
            <section id="section_guardar">
              <Link to="/catalogo" className="boton_editar cancelar">
                Cancelar
              </Link>
              <button className="boton_editar guardar">Guardar</button>
            </section>
          </section>
        </form>
      </section>
    </div>
  );
};

export default AgregarLibroPage;
