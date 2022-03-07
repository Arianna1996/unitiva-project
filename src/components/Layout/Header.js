import StyledHeader from "./Header.styled";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.allProducts.products);
  const page = useSelector((state) => state.page);
  const cartItem = useSelector((state) => state.cart.products);

  const subTitle =
    page === "cart"
      ? "cart"
      : page === "checkout"
      ? ""
      : "Last products available";

  let messageCart = "";
  if (page === "cart") {
    messageCart = `${cartItem.length} products added`;
  } else if (page === "checkout") {
    messageCart = "";
  } else {
    if (products.length === 1) {
      messageCart = "1 product available";
    } else if (products.length === 0) {
      messageCart = "no available products";
    } else {
      messageCart = `${products.length} products available
        `;
    }
  }
  return (
    <StyledHeader>
      <h1>Store Logo</h1>
      <div className="subtitleContainer">
        <h3>{subTitle}</h3>
        <p>{messageCart}</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
