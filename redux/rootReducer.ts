import { combineReducers } from "redux";
import AddToCarReducer from "./cart/cartReducer";

const RootReducer = combineReducers({
    shop : AddToCarReducer
});

export default RootReducer;