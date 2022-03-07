import styled from "styled-components";

const Badge = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${(props) => (props.last ? "#b95150" : "#60729d")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: -20px;
  right: ${(props) => (props.last ? "" : "-6px")};
  left: ${(props) => (props.last ? "-6px" : "")};
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export default Badge;
