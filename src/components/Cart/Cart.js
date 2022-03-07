import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../UI/Table";
import Card from "../UI/Card";
import { addItem, removeItem, removeQty } from "../../redux/actions/actions";
import Summary from "./Summary";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.products);
  const products = useSelector((state) => state.allProducts.products);
  const [itemQty, setItemQty] = useState("");
  const dispatch = useDispatch();

  const onDelete = (code) => {
    dispatch(removeItem(code));
  };
  const onAdd = (product) => {
    dispatch(addItem(product));
    setItemQty(products.find((prod) => prod.code === product.code));
    dispatch(
      removeQty({
        model: product.model,
        chosenQty: product.chosenQty,
        code: product.code,
        size: product.size,
        price: product.price,
      })
    );
  };

  return (
    <Card
      height="fullHeight"
      alignCenter={cartItem.length === 0 ? true : "space-between"}
    >
      {cartItem.length === 0 ? (
        <h3>Cart is empty!!</h3>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Model</th>
              <th>SKU</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.model}{" "}
                    <button
                      className="btn-remove"
                      onClick={() => onDelete(item.code)}
                    >
                      Remove <img src="../../assets/minus.png" alt="remove" />
                    </button>
                  </td>
                  <td>{item.code}</td>
                  <td>{item.size}</td>
                  <td>
                    {item.chosenQty}
                    {item.qty - item.chosenQty > 0 ? (
                      <button
                        className="btn-add"
                        onClick={() =>
                          onAdd({
                            model: item.model,
                            chosenQty: 1,
                            code: item.code,
                            size: item.size,
                            price: parseInt(item.price),
                            initialPrice: parseInt(item.price),
                          })
                        }
                      >
                        Add <img src="../../assets/add.png" alt="add" />
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>€ {(item.price * item.chosenQty).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      {cartItem.length === 0 ? "" : <Summary cartItem={cartItem} />}
    </Card>
  );
};

export default Cart;
