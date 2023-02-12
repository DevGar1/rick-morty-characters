import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    display: inline;
  }
`;

const HeaderTitle = ({ children }) => {
  return <Header>{children}</Header>;
};

export default HeaderTitle;
