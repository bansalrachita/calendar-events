import React, { Component } from "react";
import DayContainer from "../day";
import "./calendar.scss";
import CalendarHeader from "./CalendarHeader";
import PropTypes from "prop-types";

/**
 * @return {JSX} component calendar presentational component.
 * */
class CalendarView extends Component {
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
      ...others
    } = this.props;

    return (
      <div className="calender-container">
        <CalendarHeader {...{ ...others, currentYear, currentMonth }} />
        <div className="calendar-view">
          {grid.map((x, index) => (
            <DayContainer
              {...index < 7 && { cellHeader: days[index % 7] }}
              label={x}
              key={`day-` + (index + 1)}
              data={x >= 0 && items[x] ? items[x] : []}
              {...{ currentMonth, currentYear }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CalendarView;
