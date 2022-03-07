import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Badge from "../UI/Badge";
import StyledItem from "./Item.styles";
import { addItem } from "../../redux/actions/actions";
import { removeQty } from "../../redux/actions/actions";

const Item = (props) => {
  const [isValid, setIsValid] = useState("null");
  const [selectedSize, setSelectedSize] = useState(
    !props.availableSize ? 50 : "null"
  );

  const price = props.price.toFixed(2);
  const discountPrice =
    props.discount !== 0
      ? `€ ${((props.price * (100 - props.discount)) / 100).toFixed(2)}`
      : "";
  const availableSize = [];
  for (const key in props.availableSize) {
    availableSize.push({
      id: key,
      size: props.availableSize[key].size,
      qty: props.availableSize[key].sizeQty,
    });
  }
  const dispatch = useDispatch();

  const selectSizeHandler = (e) => {
    console.log(selectedSize);
    setSelectedSize(e.target.value);
    e.target.value !== "null" ? setIsValid(true) : setIsValid(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedSize);
    if ((isValid && isValid !== "null") || !props.availableSize) {
      dispatch(
        addItem({
          model: props.model,
          chosenQty: 1,
          code: props.code,
          size: selectedSize,
          price: price,
          qty: props.qty,
        })
      );
      dispatch(
        removeQty(
          {
            model: props.model,
            chosenQty: 1,
            code: props.code,
            size: selectedSize,
            price: price,
          },
          cartItem
        )
      );
      console.log(props);
    } else {
      return;
    }
  };

  const cartItem = useSelector((state) => state.cart.products);
  const existingCartItemIndex = cartItem.findIndex(
    (product) => product.code === props.code
  );
  const addedItem = cartItem[existingCartItemIndex];
  let quantita;

  if (addedItem) {
    quantita = addedItem.chosenQty;
  }

  return (
    <StyledItem>
      <Card discount={props.discount} qty={props.qty}>
        {props.qty === 1 ? <Badge last={true}>Last</Badge> : ""}
        <div className="imgContainer">
          {" "}
          <img src={`../../assets/${props.img}.png`} alt={props.img} />
        </div>
        <div className="itemInfo">
          <h4>{props.model}</h4>
          <p className="code">{props.code}</p>
          <p className="qty">
            Qty: <span className="qtyNumber">{props.qty}</span>{" "}
            <span className="messageQty">
              {props.qty === 3 || props.qty === 2
                ? "Last pieces available!"
                : props.qty === 1
                ? "Last piece, buy it now!"
                : ""}
            </span>
          </p>
          <p>
            Price: <span className="price">{`€ ${price}`}</span>
            <span className="discount"> {discountPrice}</span>
          </p>

          <div className="selectSize">
            <div>
              <form onSubmit={submitHandler} className="formItem">
                <div>
                  {props.availableSize ? (
                    <select onChange={selectSizeHandler}>
                      <option value="null">Select size</option>
                      {availableSize.map((size) => {
                        return (
                          <option key={size.id} value={size.size}>
                            {`
                    ${size.size} (${size.qty} pcs)`}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    ""
                  )}
                </div>
                <Button
                  disableButton={
                    (isValid && isValid !== "null") ||
                    (!props.availableSize && props.qty > 0)
                      ? false
                      : true
                  }
                  addedAll={props.qty === 0 ? true : false}
                >
                  {props.qty === 0 ? "Added all" : "Add"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </StyledItem>
  );
};

export default Item;
