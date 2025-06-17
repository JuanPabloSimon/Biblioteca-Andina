const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const usuarioRoutes = require("./routes/usuarioRoutes");
const libroRoutes = require("./routes/libroRoutes");
const autorRoutes = require("./routes/autorRoutes");
const editorialRoutes = require("./routes/editorialRoutes");
const direccionRoutes = require("./routes/direccionRoutes");
const generoRoutes = require("./routes/generoRoutes");
const prestamoRoutes = require("./routes/prestamoRoutes");
const libroAutorRoutes = require("./routes/libroAutorRoutes");

app.use(express.json());

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);
app.use("/api/editoriales", editorialRoutes);
app.use("/api/direcciones", direccionRoutes);
app.use("/api/generos", generoRoutes);
app.use("/api/prestamos", prestamoRoutes);
app.use("/api/libros-autores", libroAutorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

app.post("/cargarLibro", (req, res) => {
  const titulo = req.body.Titulo;
  const fechaPublicacion = req.body.FechaPublicacion;
  const genero_idgenero = req.body.genero_idgenero;
  const editorial = req.body.editorial;

  db.query(
    "INSERT INTO libro(Titulo,fechaPublicacion,genero_idgenero,editorial)"
  );
});
