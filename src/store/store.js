import { createStore } from "redux";
import reducer from "./combineReducers";

export const store = createStore(reducer);
