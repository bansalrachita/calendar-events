import { combineReducers } from "redux";
import calendar from "./calendar";
//combines all reducers into a single root reducer which is sent to the redux store.
const appReducer = combineReducers({ calendar });

export default appReducer;
