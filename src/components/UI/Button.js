import styled from "styled-components";

const Button = styled.button`
  display: flex;
  padding: ${(props) =>
    props.larger === true ? ".8rem 1.8rem" : ".5rem 1.1rem"};
  border: none;
  background: ${(props) => (props.addedAll === true ? "#999" : "#60729d")};
  border-radius: ${(props) => (props.larger === true ? "10px" : "4px")};
  color: #fff;
  cursor: pointer;
  font-size: ${(props) => (props.larger === true ? "1.2rem" : ".8rem")};
  transition: 0.3s;
  &:hover {
    background: #909cba;
  }
  pointer-events: ${(props) =>
    props.disableButton === true ? "none" : "auto"};
  opacity: ${(props) => (props.disableButton === true ? "0.4" : "1")};
`;

export default Button;
