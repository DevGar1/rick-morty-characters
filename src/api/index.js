import { rickAndMorty } from "./config";

export const obtenerTodosLosUsuarios = async (page = 1) => {
  const { data } = await rickAndMorty.get(`/character?page=${page}`);
  return data;
};
