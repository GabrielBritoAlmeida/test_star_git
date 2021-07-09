import { combineReducers } from "redux";
import repositories from "./repositories/reducer";
import favorites from "./favorites/reducer";

export default combineReducers({
  repositories,
  favorites
});
