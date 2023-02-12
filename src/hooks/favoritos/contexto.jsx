import { createContext } from "react";
import useFavoritos from "./favoritos";

const init = {
  favoritos: [],
};

export const FavoritosContext = createContext({
  state: {
    ...init,
  },
  agregarPersonaje: (personaje) => console.log(personaje),
  borrarPersonaje: (personajeId = 0) => console.log(personajeId),
});

export const FavoritosProvider = ({ children }) => {
  const { agregarPersonaje, borrarPersonaje, favoritos } = useFavoritos();

  return (
    <FavoritosContext.Provider
      value={{ agregarPersonaje, borrarPersonaje, state: { favoritos } }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
