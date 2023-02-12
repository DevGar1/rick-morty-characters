import styled from "styled-components";
import useFavContext from "../hooks/favoritos";
import { icons } from "../assets";
import { Button } from ".";

const List = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  background-color: #272b33;
  flex-wrap: wrap;
  li {
    padding: 1.5rem;
    list-style: none;
    width: 380px;
    margin-bottom: 2rem;
    background-color: #3c3e44;
    border-radius: 12px;
    h3 {
      font-size: 32px;
      height: 50px;
    }
    img {
      border-radius: 100%;
      margin: 2rem 0;
    }
    p {
      font-size: 18px;
    }
    span {
      color: var(--green);
      width: 70px;
      display: inline-block;
    }
    .status {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        margin: 0;
      }
    }
    .actions {
      margin-top: 1rem;
    }
    .information {
      height: 140px;
    }
  }
`;

const Status = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isDead ? "red" : "white")};
`;

const ListaPersonajes = ({ children }) => {
  return <List>{children}</List>;
};

const Item = ({ informacion }) => {
  const { agregarPersonaje, borrarPersonaje, state } = useFavContext();
  const { id, name, image, status, species, gender, origin } = informacion;
  const isFavourite = state.favoritos.find((personaje) => personaje.id === id);
  const handleClick = isFavourite
    ? () => borrarPersonaje(id)
    : () => agregarPersonaje(informacion);
  const getStatusImage = (status) => {
    switch (status) {
      case "Alive": {
        return icons.smile;
      }
      case "Dead": {
        return icons.sad;
      }
      default:
        return icons.bored;
    }
  };

  return (
    <li key={id}>
      <h3>{name}</h3>
      <img src={image} alt={`character ${name}`} />
      <div>
        <div className="information">
          <div className="status">
            <Status isDead={status === "Dead"}>
              <span>Estatus: </span> {status}
            </Status>
            <img src={getStatusImage(status)} alt="example" />
          </div>
          <p>
            <span>Especia: </span> {species}
          </p>
          <p>
            <span>Genero: </span> {gender}
          </p>
          <p>
            <span>Origen: </span> {origin}
          </p>
        </div>
        <div className="actions">
          <Button
            onClick={handleClick}
            isDanger={isFavourite}
            text={isFavourite ? "Eliminar" : "Agregar"}
          />
        </div>
      </div>
    </li>
  );
};
ListaPersonajes.Item = Item;
  
export default ListaPersonajes;
