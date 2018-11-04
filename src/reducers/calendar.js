import {
  CALENDAR_REQUEST_EVENTS,
  CALENDAR_RECEIVE_EVENTS,
  CALENDAR_CLEAR_ALL,
  CALENDAR_UPDATE_CURRENT_MONTH,
  CALENDAR_UPDATE_CURRENT_YEAR
} from "../actions/calendar";
import moment from "moment";

const defaultState = {
  items: {},
  isFetching: false,
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  currentMonth: moment().format("MM"),
  currentYear: moment().format("YYYY"),
  lastUpdated: moment().format()
};
/**
 * @param {object} state current state data.
 * @param {object} action update current state
 * @return {object} new state.
 * */
export default function calendar(state = defaultState, action) {
  switch (action.type) {
    case CALENDAR_REQUEST_EVENTS: {
      return { ...state, isFetching: true };
    }
    case CALENDAR_RECEIVE_EVENTS: {
      return {
        ...state,
        items: action.items,
        isFetching: false,
        lastUpdated: moment().format()
      };
    }

    case CALENDAR_UPDATE_CURRENT_MONTH: {
      return {
        ...state,
        currentMonth: action.month
      };
    }

    case CALENDAR_UPDATE_CURRENT_YEAR: {
      return {
        ...state,
        currentYear: action.year
      };
    }

    case CALENDAR_CLEAR_ALL: {
      return defaultState;
    }

    default:
      return state;
  }
}
