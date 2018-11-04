import React, { Component } from "react";
import PropTypes from "prop-types";
import CellView from "./CellView";
import { connect } from "react-redux";
import { getCalendarItemsByDay } from "../../reducers";
import moment from "moment";

class CellContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    data: PropTypes.array.isRequired,
    cellHeader: PropTypes.string,
    label: PropTypes.number.isRequired,
    dispatch: PropTypes.func
  };

  render() {
    const { currentYear, currentMonth, label, ...others } = this.props;
    const current =
      moment()
        .year(currentYear)
        .month(currentMonth - 1)
        .date(label)
        .format("MM-DD-YYYY") === moment().format("MM-DD-YYYY");

    return <CellView {...{ ...others, label, current }} />;
  }
}

const mapStateToProps = (state, { label }) => {
  return {
    data: getCalendarItemsByDay(state, label)
  };
};

export default connect(mapStateToProps)(CellContainer);
