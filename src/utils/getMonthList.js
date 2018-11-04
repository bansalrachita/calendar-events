import getDayOfMonth from "./getDayOfTheMonth";
import moment from "moment";

/***
 * @param {string} month month of the year.
 * @param {string} year calendar year range same as moment year = -270,000 to 270,000.
 * @return {array} returns an array of 42 elements to render the days of the month in the view.
 */
export default function(month, year) {
  let dayOfWeek = getDayOfMonth(month, year);
  //moment uses 0-6 numbering for day of the week where 0 = Sunday and 6 = Saturday.
  dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const daysInMonth = moment([year, month], "YYYY-MM").daysInMonth();
  const remainingDaysOfGrid = 42 - daysInMonth - dayOfWeek;
  return [
    ...new Array(dayOfWeek).fill(-1),
    ...new Array(daysInMonth).fill(0).map((val, i) => i + 1),
    ...new Array(remainingDaysOfGrid).fill(-1)
  ];
}
