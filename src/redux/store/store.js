import { createStore, combineReducers } from "redux";
import psikologsReducer from "../reducer/reducer";

const allReducer = combineReducers({
  psikolog: psikologsReducer,
});

const store = createStore(allReducer);

export default store;
