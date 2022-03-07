import ActionTypes from "../costances/actions-type";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const goToCart = () => {
  return {
    type: ActionTypes.GO_TO_CART,
  };
};

export const checkout = () => {
  return {
    type: ActionTypes.CHECKOUT,
  };
};

export const goToStore = () => {
  return {
    type: ActionTypes.GO_TO_STORE,
  };
};

export const addItem = (product) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: product,
  };
};
export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const removeItem = (code) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: code,
  };
};
export const removeQty = (products) => {
  return {
    type: ActionTypes.REMOVE_QTY,
    payload: products,
  };
};
