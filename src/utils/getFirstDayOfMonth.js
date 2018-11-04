import moment from "moment";

export default function(month, year) {
  return moment([year, String(month - 1), 1]).day();
}
