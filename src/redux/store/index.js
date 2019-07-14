import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "../reducers";
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
