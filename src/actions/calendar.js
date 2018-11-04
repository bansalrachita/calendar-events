import "whatwg-fetch";
import getCalendarEventsURL from "../utils/getCalendarEventsURL";
import indexByDate from "../utils/indexByDate";

export const CALENDAR_REQUEST_EVENTS = "CALENDAR_REQUEST_EVENTS";
export const CALENDAR_RECEIVE_EVENTS = "CALENDAR_RECEIVE_EVENTS";
export const CALENDAR_CLEAR_ALL = "CALENDAR_CLEAR_ALL";
export const CALENDAR_UPDATE_CURRENT_MONTH = "CALENDAR_UPDATE_CURRENT_MONTH";
export const CALENDAR_UPDATE_CURRENT_YEAR = "CALENDAR_UPDATE_CURRENT_YEAR";

export const calendarRequestData = () => {
  return {
    type: CALENDAR_REQUEST_EVENTS
  };
};

export const calendarFetchAllEvents = () => {
  return async (dispatch, getState) => {
    try {
      const year = getState().calendar.currentYear;

      dispatch(calendarRequestData());

      const response = await fetch(getCalendarEventsURL(), {
        method: "GET",
        Accept: "application/json",
        "Content-Type": "application/json"
      });

      if (response.ok) {
        const json = await response.json();

        if (json.data) {
          const items = json.data;

          const yearlyData =
            indexByDate(items, "launch_date", "YYYY")[+year] || [];

          dispatch(
            calendarReceiveEvents(indexByDate(yearlyData, "launch_date", "M"))
          );
        }
      } else {
        dispatch(calendarReceiveEvents());
      }
    } catch (error) {
      dispatch(calendarReceiveEvents());
      throw new Error(error.message);
    }
  };
};

export const calendarReceiveEvents = (items = {}) => {
  return {
    type: CALENDAR_RECEIVE_EVENTS,
    items
  };
};

export const calendarClearAllEvents = () => {
  return {
    type: CALENDAR_CLEAR_ALL
  };
};

export const calendarUpdateMonth = month => {
  return {
    type: CALENDAR_UPDATE_CURRENT_MONTH,
    month: String(month)
  };
};

export const calendarUpdateYear = year => {
  return {
    type: CALENDAR_UPDATE_CURRENT_YEAR,
    year: String(year)
  };
};
