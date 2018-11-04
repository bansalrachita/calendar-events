import React, { Component } from "react";
import "./calendar.scss";
import moment from "moment";

class CalendarHeader extends Component {
  onClickPrev = event => {
    const { currentMonth, currentYear } = this.props;

    const prevMonth = currentMonth - 1 < 1 ? 12 : currentMonth - 1;
    const prevYear = currentMonth - 1 < 1 ? currentYear - 1 : currentYear;

    if (prevYear !== currentYear) {
      this.props.onClickPrev(event, prevMonth, prevYear);
    } else {
      this.props.onClickPrev(event, prevMonth);
    }
  };

  onClickNext = event => {
    const { currentMonth, currentYear } = this.props;
    const nextMonth = 1 + +currentMonth > 12 ? 1 : 1 + +currentMonth;
    const nextYear = 1 + +currentMonth > 12 ? 1 + +currentYear : currentYear;
    console.log("nextYear: ", nextYear, "currentYear: ", currentYear);
    if (nextYear !== currentYear) {
      this.props.onClickPrev(event, nextMonth, nextYear);
    } else {
      this.props.onClickPrev(event, nextMonth);
    }
  };

  render() {
    const { currentMonth, currentYear } = this.props;

    return (
      <div className="header">
        <button className="btn-prev" onClick={this.onClickPrev}>{`<`}</button>
        <span className="header-label">{`${moment()
          .month(currentMonth - 1)
          .format("MMMM")} ${currentYear}`}</span>
        <button className="btn-next" onClick={this.onClickNext}>{`>`}</button>
      </div>
    );
  }
}

export default CalendarHeader;
