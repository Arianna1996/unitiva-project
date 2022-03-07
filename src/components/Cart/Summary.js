import { useSelector } from "react-redux";
import StyledSummary from "./Summary.styled";

const Summary = () => {
  const cartItem = useSelector((state) => state.cart.products);
  return (
    <StyledSummary>
      <p>
        Total pieces:
        <span>{cartItem.reduce((a, b) => a + b.chosenQty, 0)}</span>
      </p>
      <p>
        Total price:
        <span>
          {cartItem.reduce((a, b) => a + b.price * b.chosenQty, 0).toFixed(2)}
        </span>
      </p>
    </StyledSummary>
  );
};

export default Summary;
