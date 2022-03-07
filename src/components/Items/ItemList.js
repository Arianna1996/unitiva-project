import React, { useEffect, useState, useCallback } from "react";
import StyledItemList from "./ItemList.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Item from "../Items/Item";
import { removeQty, setProducts } from "../../redux/actions/actions";

const ItemList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.products);
  const products = useSelector((state) => state.allProducts.products);

  const fetchProductHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://unitiva-project-default-rtdb.firebaseio.com/glasses.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      cartItem.length === 0
        ? dispatch(setProducts(data))
        : dispatch(removeQty(data));

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductHandler();
  }, []);
  let content = <p>Found no products</p>;

  if (products.length > 0) {
    content = (
      <StyledItemList>
        {products.map((item, index) => {
          return (
            <Item
              key={index}
              availableSize={item.availableSize}
              code={item.code}
              discount={item.discount}
              img={item.img}
              model={item.model}
              price={item.price}
              qty={item.qty}
            />
          );
        })}
      </StyledItemList>
    );
  }

  if (isLoading) {
    content = (
      <div className="spinner">
        <img src="../assets/spinner.svg" alt="spinner"></img>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ItemList;
