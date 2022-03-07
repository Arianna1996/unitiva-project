import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";

const Footer = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const cartItem = useSelector((state) => state.cart.products);

  const onCart = () => {
    dispatch({
      type: "GO_TO_CART",
    });
  };

  async function onCheckout() {
    dispatch({
      type: "CHECKOUT",
    });
    const response = await fetch(
      "https://unitiva-project-default-rtdb.firebaseio.com//orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          orderedItems: cartItem,
        }),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    dispatch({
      type: "CLEAR_CART",
    });
  }
  const onStore = () => {
    dispatch({
      type: "GO_TO_STORE",
    });
  };

  return (
    <footer>
      <div>
        {page === "cart" ? (
          <div className="backButton" onClick={onStore}>
            <img src="../../assets/back-button.png" alt="back-button" />
            <p>Back</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="footerItem">
        <p>
          {cartItem.length === 0
            ? "No products in cart!"
            : cartItem.length === 1
            ? " 1 product added"
            : `${cartItem.length} products added`}
        </p>
        <Button
          larger={true}
          onClick={
            page === "store" ? onCart : page === "cart" ? onCheckout : onStore
          }
          disableButton={
            page === "cart" && cartItem.length === 0 ? true : false
          }
        >
          {page === "checkout"
            ? "Buy more"
            : page === "cart"
            ? "Checkout"
            : "Go to cart"}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
