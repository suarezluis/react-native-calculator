import { combineReducers } from "redux";
import InputReducer from "./InputReducer";
import OutputReducer from "./OutputReducer";

const reducers = combineReducers({
  input: InputReducer,
  output: OutputReducer
});

export default reducers;
