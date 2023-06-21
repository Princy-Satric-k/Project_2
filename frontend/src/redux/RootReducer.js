import ShoppingReducer from "./reducers/ShoppingReducers";
import { combineReducers } from "redux";
export default function createReducer() {
  const RootReducer = combineReducers({
    shopping: ShoppingReducer,
  });
  return RootReducer;
}
