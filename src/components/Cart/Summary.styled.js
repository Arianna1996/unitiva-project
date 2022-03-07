import styled from "styled-components";

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 2rem;
  p {
    font-size: 1.2rem;
    display: flex;
    width: 20%;
    justify-content: space-between;
    border-bottom: 1px solid #555;
  }
  p:first-child {
    margin-bottom: 1.6rem;
  }
  span {
    font-weight: bold;
  }
`;

export default StyledSummary;
