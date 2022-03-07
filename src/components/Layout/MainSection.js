import { useSelector } from "react-redux";
import ItemList from "../Items/ItemList";
import Cart from "../Cart/Cart";
import Checkout from "../Cart/Checkout";

const MainSection = () => {
  const page = useSelector((state) => state.page);
  return (
    <>
      {page === "cart" ? (
        <Cart />
      ) : page === "checkout" ? (
        <Checkout />
      ) : (
        <ItemList />
      )}
    </>
  );
};

export default MainSection;
