import { useCallback, useState } from "react";
import { obtenerTodosLosUsuarios } from "../api";

export const usePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [pageInformation, setPageInformation] = useState({
    count: 1,
    current: 1,
  });

  const updatePersonajes = useCallback(async (page) => {
    const {
      results,
      info: { pages },
    } = await obtenerTodosLosUsuarios(page);
    setPageInformation((state) => {
      return {
        ...state,
        count: pages,
      };
    });
    setPersonajes(results);
  }, []);

  const updatePage = useCallback((newPage) => {
    setPageInformation((state) => {
      return {
        ...state,
        current: newPage,
      };
    });
  }, []);

  return { personajes, updatePersonajes, pageInformation,updatePage };
};
