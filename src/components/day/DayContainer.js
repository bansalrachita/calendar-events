import React, { Component } from "react";
import PropTypes from "prop-types";
import DayView from "./DayView";
import moment from "moment";

class DayContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    data: PropTypes.array.isRequired,
    cellHeader: PropTypes.string,
    label: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func
  };

  render() {
    const { currentYear, currentMonth, label } = this.props;
    const current =
      moment()
        .year(currentYear)
        .month(currentMonth - 1)
        .date(label)
        .format("MM-DD-YYYY") === moment().format("MM-DD-YYYY");

    return <DayView {...{ ...this.props, current }} />;
  }
}

export default DayContainer;
