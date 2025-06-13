import "./main.css";
import Header from "../Header/Header";
import HeaderCatalogo from "../HeaderCatalogo/HeaderCatalogo";
import CardList from "../CardList/CardList";
import EditarLibro from "../EditarLibroContainer/EditarLibro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <Header />
      <hr id="divisor" />
      <HeaderCatalogo />
      <Router>
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/catalogo" element={<CardList />} />
          <Route path="/editar/:id" element={<EditarLibro />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
