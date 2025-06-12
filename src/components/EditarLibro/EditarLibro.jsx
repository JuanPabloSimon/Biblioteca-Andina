import { useState } from "react";
import "./editarLibro.css";

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
        <section>
          <img src="asdasd" alt="Hola" />
          <b>Estado</b>
        </section>
        <section id="section_finalizar">
          <button>Generar prestamo</button>
          <button>Cancelar</button>
          <button>Guardar</button>
        </section>
      </section>
    </div>
  );
};

export default EditarLibro;
