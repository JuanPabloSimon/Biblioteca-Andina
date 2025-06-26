import "./main.css";
import Header from "../Header/Header";
import HeaderCatalogo from "../Catalogo/HeaderCatalogo/HeaderCatalogo";
import CardList from "../Catalogo/CardList/CardList";
import EditarLibro from "../EditarLibroContainer/EditarLibro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgregarLibroPage from "../Catalogo/AgregarLibro/AgregarLibroPage/AgregarLiroPage";

const Main = () => {
  return (
    <div id="main">
      <Router>
        <Header />
        <hr id="divisor" />
        <HeaderCatalogo />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/catalogo" element={<CardList />} />
          <Route path="/editar/:id" element={<EditarLibro />} />
          <Route path="/agregar_libro" element={<AgregarLibroPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
