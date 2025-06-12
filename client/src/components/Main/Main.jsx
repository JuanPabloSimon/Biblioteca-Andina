import "./main.css";
import Header from "../Header/Header";
import HeaderCatalogo from "../HeaderCatalogo/HeaderCatalogo";
import CardList from "../CardList/CardList";
import EditarLibro from "../EditarLibro/EditarLibro";

const Main = () => {
  return (
    <div id="main">
      <Header />
      <hr id="divisor" />
      <HeaderCatalogo />
      {/* <EditarLibro /> */}
      <CardList />
    </div>
  );
};

export default Main;
