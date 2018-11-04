import React, { Component } from "react";
import DayContainer from "../day";
import "./month.scss";
import MonthHeader from "./MonthHeader";
import PropTypes from "prop-types";

/**
 * @return {JSX} component calendar presentational component.
 * */
class MonthView extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    items: PropTypes.object.isRequired,
    currentMonth: PropTypes.string.isRequired,
    currentYear: PropTypes.string.isRequired,
    grid: PropTypes.array.isRequired,
    days: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func
  };

  render() {
    const {
      items,
      currentMonth,
      currentYear,
      grid,
      days,
      isFetching,
      ...others
    } = this.props;

    return (
      <div className="month-container">
        <MonthHeader
          {...{ ...others, currentYear, currentMonth, isFetching }}
        />
        <div className="month-view">
          {grid.map((x, index) => (
            <DayContainer
              {...index < 7 && { cellHeader: days[index % 7] }}
              label={x}
              index={index}
              key={`day-` + (index + 1)}
              data={x >= 0 && items[x] ? items[x] : []}
              {...{ currentMonth, currentYear, isFetching }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MonthView;
