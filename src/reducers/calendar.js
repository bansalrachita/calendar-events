import {
  CALENDAR_REQUEST_DATA,
  CALENDAR_RECEIVE_DATA
} from "../actions/calendar";

/**
 * @param {object} state current state data.
 * @param {object} action update current state
 * @return {object} new state.
 * */
export default function calendar(
  state = {
    items: [],
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case CALENDAR_REQUEST_DATA: {
      return { ...state, isFetching: true };
    }
    case CALENDAR_RECEIVE_DATA: {
      return {
        ...state,
        items: action.items,
        isFetching: false
      };
    }

    default:
      return state;
  }
}
