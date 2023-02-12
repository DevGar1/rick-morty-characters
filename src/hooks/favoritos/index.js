import { useContext } from "react";
import { FavoritosContext } from "./contexto";

const useFavContext = () => {
  const { agregarPersonaje, borrarPersonaje, state } =
    useContext(FavoritosContext);
  return { agregarPersonaje, borrarPersonaje, state };
};

export default useFavContext;
