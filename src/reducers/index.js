import { combineReducers } from "redux";
import calendar, * as fromCalendar from "./calendar";

const appReducer = combineReducers({ calendar });

export const getCalendarItemsByDay = (state, filter) => {
  return fromCalendar.getCalendarItemsByDay(state.calendar, filter);
};

export const getEventsByDay = (state, filter) => {
  return fromCalendar.getEventsByDay(state.calendar, filter);
};

export default appReducer;
