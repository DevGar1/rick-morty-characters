import styled from "styled-components";
import { images } from "../assets";

const Container = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 700px) {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <img src={images.logo} alt="rick and morty logo" />
    </Container>
  );
};

export default Header;
