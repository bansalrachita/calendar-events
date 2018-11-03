import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";

/**
 * @param {object} initialState set initial state.
 * @return {Function} middleware.
 * */
export default function configureStore(initialState = {}) {
  const middleWares = [thunkMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let createStoreWithMiddleware = null;
  // apply logger conditionally to log in dev env only.
  if (process.env.NODE_ENV === "development") {
    middleWares.push(createLogger());

    createStoreWithMiddleware = composeEnhancers(
      applyMiddleware(...middleWares)
    )(createStore);
  } else {
    createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
  }

  return createStoreWithMiddleware(rootReducer, initialState);
}
