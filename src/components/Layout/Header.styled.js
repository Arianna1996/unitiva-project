import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 2.6em;
    padding-top: 2rem;
  }

  .subtitleContainer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 2px solid #999;
    padding: 1.8rem 0 0.6rem 0;
    margin-bottom: 1.8rem;
    min-height: 4.8rem;
    h3 {
      text-transform: uppercase;
      color: #555;
      font-size: 1.8rem;
    }
    p {
      color: #555;
      font-size: 1rem;
    }
  }
`;

export default StyledHeader;
