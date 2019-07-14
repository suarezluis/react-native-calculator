import { ADD_NUMBER } from "../types";

const defaultState = {
  word: ""
};

export default (state = "", action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, luis: "" };
      break;
    default:
      return { ...state };
      break;
  }
};
