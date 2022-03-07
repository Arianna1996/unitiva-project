import ActionTypes from "../costances/actions-type";

const pageReducer = (state = "store", { type }) => {
  switch (type) {
    case ActionTypes.GO_TO_CART:
      return "cart";
    case ActionTypes.CHECKOUT:
      return "checkout";
    case ActionTypes.GO_TO_STORE:
      return "store";
    default:
      return state;
  }
};

export default pageReducer;
