import { combineReducers } from "redux";
import { LangReducer } from "./langReducer";
import { filmsReducer } from "./filmReducer";

const reducers = combineReducers({
  lang : LangReducer,
  list: filmsReducer,
  
  
});
export default reducers;