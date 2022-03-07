import ActionTypes from "../costances/actions-type";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ITEM:
      const existingCartItemIndex = state.products.findIndex(
        //verifico se l'elemento aggiunto è già presente nel carrello e ne modifico la quantità
        (item) => item.code === payload.code && item.size === payload.size
      );
      const existingCartItem = state.products[existingCartItemIndex];
      let updateItems;
      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem,
          chosenQty: existingCartItem.chosenQty + 1,
        };
        updateItems = [...state.products];
        updateItems[existingCartItemIndex] = updateItem;
      } else {
        updateItems = state.products.concat(payload);
      }
      return {
        products: updateItems,
      };

    case ActionTypes.REMOVE_ITEM:
      return {
        products: state.products.filter((product) => product.code !== payload),
      };
    case ActionTypes.CLEAR_CART:
      return {
        products: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
