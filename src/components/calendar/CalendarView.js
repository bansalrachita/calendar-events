import React, { Component } from "react";
import CellContainer from "../cell";
import "./calendar.scss";
import CalendarHeader from "./CalendarHeader";
import moment from "moment";
class CalendarView extends Component {
  render() {
    const {
      items,
      currentMonth,
      currentYear,
      grid,
      days,
      currentDate,
      handleOnClickPrev,
      handleOnClickNext
    } = this.props;

    return (
      <div className="calender-container">
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          onClickPrev={handleOnClickPrev}
          onClickNext={handleOnClickNext}
        />
        <div className="calendar-view">
          {grid.map((x, index) => (
            <CellContainer
              {...index < 7 && { cellHeader: days[index % 7] }}
              label={x}
              key={`day-` + (index + 1)}
              data={x >= 0 && items[currentMonth] ? items[currentMonth] : {}}
              {...{ currentMonth, currentDate, currentYear }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CalendarView;
