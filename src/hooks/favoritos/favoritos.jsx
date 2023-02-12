import { useCallback, useState } from "react";

const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarPersonaje = useCallback((personaje) => {
    console.log(personaje);
    setFavoritos((favoritos) => favoritos.concat([personaje]));
  }, []);

  const borrarPersonaje = useCallback((personajeId) => {
    setFavoritos((favoritos) => {
      return favoritos.filter((personaje) => personaje.id !== personajeId);
    });
  }, []);
  return { favoritos, agregarPersonaje, borrarPersonaje };
};

export default useFavoritos;
