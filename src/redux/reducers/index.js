import { combineReducers } from "redux";
import productReducer from "./productReducer";
import pageReducer from "./pageReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  page: pageReducer,
  cart: cartReducer,
});

export default reducers;
