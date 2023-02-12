import styled from "styled-components";

const Container = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: ${(props) => (props.isDanger ? "red" : "var(--green)")};
  color: white;
  border: none;
  font-size: 16px;
  border: 1px #3c3e44 solid;
  transition: 300ms all ease;
  cursor: pointer;
  :hover {
    background-color: #3c3e44;
    color: ${(props) => (props.isDanger ? "red" : "var(--green)")};
    border: 1px ${(props) => (props.isDanger ? "red" : "var(--green)")} solid;
  }
  :active {
    transform: scale(1.1);
  }
`;

const Button = ({ text, onClick, isDanger = false }) => {
  return (
    <Container isDanger={isDanger} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
