import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #c3c3c3;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${(props) => (props.height === "fullHeight" ? "61vh" : "auto")};
  align-items: ${(props) =>
    props.alignCenter === true
      ? "center"
      : props.alignCenter === "space-between"
      ? "space-between"
      : "auto"};
  justify-content: ${(props) =>
    props.alignCenter === true
      ? "center"
      : props.alignCenter === "space-between"
      ? "space-between"
      : "auto"};

  .imgContainer img {
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
    padding: 2rem 1rem;
  }
  .itemInfo {
    padding: 0.8rem;
  }
  h3 {
    font-size: 2rem;
    color: #555;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 2rem;
  }
  h4 {
    color: #555;
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
    color: #555;
  }
  .code {
    margin-bottom: 0.6rem;
  }
  .qty {
    margin-bottom: 0.6rem;
  }
  .qtyNumber {
    font-weight: bold;
    color: ${(props) => (props.qty === 1 ? "#b95150" : "")};
  }
  .price {
    text-decoration: ${(props) =>
      props.discount !== 0 ? "line-through" : "none"};
    font-weight: ${(props) => (props.discount !== 0 ? "normal" : "bold")};
  }
  .messageQty {
    font-size: 0.8rem;
    color: #b95150;
  }
  .discount {
    font-weight: bold;
  }
  .btn-remove,
  .btn-add {
    background: transparent;
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    color: #b95150;
    font-weight: bold;
  }
  .btn-add {
    color: #60729d;
  }
  .btn-remove img,
  .btn-add img {
    width: 20px;
    border: none;
    margin-left: 0.3rem;
  }
  .formItem {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    align-items: center;

    select {
      border: 1px solid #8b8b8b;
      padding: 0.4rem 0.6rem;
      border-radius: 6px;
    }
  }
  .imgContainer {
    min-height: 9rem;
    display: flex;
    align-items: flex-end;
  }
`;

export default Card;
