import { ADD_NUMBER } from "../types";

const defaultState = {
  word: ""
};

export default (calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, luis: "" };
      break;
    default:
      return { ...state };
      break;
  }
});
