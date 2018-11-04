import React, { Component } from "react";
import "./calendar.scss";
import moment from "moment";

class CalendarHeader extends Component {
  onClickPrev = event => {
    const { currentMonth, currentYear } = this.props;
    const prevMonth = currentMonth - 1 < 1 ? 12 : currentMonth - 1;
    const prevYear = currentMonth - 1 < 1 ? currentYear - 1 : currentYear;

    this.props.handleOnClick(
      event,
      prevMonth,
      prevYear !== currentYear ? prevYear : null
    );
  };

  onClickNext = event => {
    const { currentMonth, currentYear } = this.props;
    const nextMonth = 1 + +currentMonth > 12 ? 1 : 1 + +currentMonth;
    const nextYear = 1 + +currentMonth > 12 ? 1 + +currentYear : currentYear;

    this.props.handleOnClick(
      event,
      nextMonth,
      nextYear !== currentYear ? nextYear : null
    );
  };

  render() {
    const { currentMonth, currentYear } = this.props;
    const disabled = currentYear < -270000 || currentYear > 270000;
    const monthLabel = moment()
      .month(currentMonth - 1)
      .format("MMMM");

    return (
      <div className="header">
        <button
          className="btn-prev"
          onClick={this.onClickPrev}
          disabled={disabled}
        >
          {`<`}
        </button>
        <span className="header-label">{`${monthLabel} ${currentYear}`}</span>
        <button className="btn-next" onClick={this.onClickNext}>{`>`}</button>
      </div>
    );
  }
}

export default CalendarHeader;
