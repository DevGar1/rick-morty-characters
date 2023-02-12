import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { FavoritosProvider } from "../hooks/favoritos/contexto";

const Personajes = () => {
  return (
    <div className="personajes">
      <Header />
      <FavoritosProvider>
        <Outlet />
      </FavoritosProvider>
    </div>
  );
};

export default Personajes;
