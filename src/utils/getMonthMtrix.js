import getFirstDayOfMonth from "./getFirstDayOfMonth";
import moment from "moment";

export default function(month, year) {
  let dayOfWeek = getFirstDayOfMonth(month, year);
  //moment uses 0-6 numbering for day of the week.
  dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const daysInMonth = moment([year, month], "YYYY-MM").daysInMonth();
  const remainingDaysOfGrid = 42 - daysInMonth - dayOfWeek;
  console.log(dayOfWeek, daysInMonth, remainingDaysOfGrid);

  const daysOftheMonth = [
    ...new Array(dayOfWeek).fill(-1),
    ...new Array(daysInMonth).fill(0).map((val, i) => i + 1),
    ...new Array(remainingDaysOfGrid).fill(-1)
  ];

  return daysOftheMonth;
}
