import moment from "moment";

/**
 * @param {string} month month of the year.
 * @param {string} year calendar year.
 * @return {number} returns the starting day of the month range from 0-6.
 * */
export default function(month, year) {
  return moment([year, String(month - 1), 1]).day();
}
