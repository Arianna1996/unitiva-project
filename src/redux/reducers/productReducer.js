import ActionTypes from "../costances/actions-type";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log({ ...state, products: payload });
      return { ...state, products: payload };
    case ActionTypes.REMOVE_QTY:
      const findItemIndex = state.products.findIndex(
        (item) => item.code === payload.code
      );

      const selectedItem = state.products[findItemIndex];
      console.log(selectedItem.qty);
      let updateItems;
      if (selectedItem && selectedItem.qty > 0) {
        const updateItem = {
          ...selectedItem,
          qty: selectedItem.qty - 1,
        };
        updateItems = [...state.products];
        updateItems[findItemIndex] = updateItem;
      }
      return {
        products: updateItems,
      };
    default:
      return state;
  }
};

export default productReducer;
