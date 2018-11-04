import moment from "moment";

export default function(items, property, dateFormat, year) {
  let array = [...items];
  let groupedItems = new Map();
  let result = {};

  if (Array.isArray(items)) {
    array.sort(function(a, b) {
      const equal = a[property] === b[property];
      const greater = a[property] > b[property];
      return equal ? 0 : greater ? 1 : -1;
    });

    for (let item of array) {
      const uniqueProp = item[property];
      const _id = moment(uniqueProp).format(dateFormat);
      groupedItems.set(
        _id,
        groupedItems.has(_id) ? [...groupedItems.get(_id), item] : [item]
      );
    }

    groupedItems.forEach((value, key) => {
      result[key] = value;
    });
  }

  return result;
}
