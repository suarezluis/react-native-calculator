import { ADD_NUMBER } from "../types";

export default (state = "_", action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, luis: "" };
      break;
    default:
      return state;
      break;
  }
};
