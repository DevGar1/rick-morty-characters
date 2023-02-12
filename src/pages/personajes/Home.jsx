import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, HeaderTitle, ListaPersonajes } from "../../components";
import { usePersonajes } from "../../hooks/personajes";
import Paginate from "./Paginate";

const Home = () => {
  const { pageInformation, personajes, updatePersonajes, updatePage } =
    usePersonajes();
  const titleRef = useRef();
  const navigate = useNavigate();
  const { count, current } = pageInformation;

  useEffect(() => {
    updatePersonajes(current).finally(() => {
      if (titleRef.current)
        titleRef.current.scrollIntoView({ behavior: "smooth" });
    });
  }, [updatePersonajes, current]);

  const CharactersElement = useMemo(() => {
    return personajes.map((character) => {
      const { id, name, status, species, gender, origin, episode, image } =
        character;
      const episodes = episode.map((url) => {
        const splitUrl = String(url).split("/");
        const episodesArr = splitUrl[splitUrl.length - 1];
        return episodesArr;
      });

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
            episodes,
          }}
        />
      );
    });
  }, [personajes]);

  return (
    <>
      <HeaderTitle>
        <h1 ref={titleRef}>Personajes</h1>
        <div>
          <Button
            onClick={() => navigate("/favoritos")}
            text={"Ver favoritos"}
          />
        </div>
      </HeaderTitle>
      <ListaPersonajes>{CharactersElement}</ListaPersonajes>
      <Paginate count={count} onPageChange={updatePage} />
    </>
  );
};

export default Home;
