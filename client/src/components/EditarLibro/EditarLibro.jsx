import { useState } from "react";
import "./editarLibro.css";
import { Link } from "react-router-dom";

const EditarLibro = () => {
  const [prestado, setPrestado] = useState(false);

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
                className="form_element"
                type="text"
                placeholder="Buscar..."
              />
            </>
          ) : (
            <></>
          )}
        </form>
      </section>
      <section id="section_2">
        <section id="section_2_image">
          <section id="section2_image_container">
            <section id="border_image">
              <img
                id="imagen_edicion"
                src="https://covers.openlibrary.org/b/olid/OL8168334M-L.jpg"
                alt="Hola"
              />
            </section>
          </section>
          <b>Estado</b>
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
