import styled from "styled-components";

const Table = styled.table`
  padding: 2rem;
  th {
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-basis: 20%;
    padding: 1rem 1.6rem;
    border-right: 1px solid #999;
    &:last-child {
      border-right: none;
    }
    &:first-child {
      flex-basis: 40% !important;
    }
  }
  tr {
    display: flex;
  }
  td {
    display: flex;
    flex-direction: row;
    flex-basis: 20%;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    &:last-child {
      border-right: none;
    }
    &:first-child {
      flex-basis: 40% !important;
    }
  }
`;

export default Table;
