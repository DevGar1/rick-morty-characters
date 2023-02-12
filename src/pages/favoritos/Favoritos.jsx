import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, HeaderTitle, ListaPersonajes } from "../../components";
import useFavContext from "../../hooks/favoritos";

const Favoritos = () => {
  const { state } = useFavContext();
  const navigate = useNavigate();
  console.log(state.favoritos);

  const FavoritosElement = useMemo(() => {
    return state.favoritos.map((character) => {
      const { id, name, status, species, gender, origin, image } = character;

      return (
        <ListaPersonajes.Item
          key={id}
          informacion={{
            id,
            name,
            image,
            status,
            species,
            gender,
            origin: origin.name,
          }}
        />
      );
    });
  }, [state.favoritos]);

  return (
    <>
      <HeaderTitle>
        <h1>Favoritos</h1>
        <Button onClick={() => navigate("/")} text={"Home"} />
      </HeaderTitle>
      <ListaPersonajes>{FavoritosElement}</ListaPersonajes>
    </>
  );
};

export default Favoritos;
