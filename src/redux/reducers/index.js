import { combineReducers } from "redux";
import { LangReducer } from "./langReducer";

const reducers = combineReducers({
  lang : LangReducer,
  
});
export default reducers;