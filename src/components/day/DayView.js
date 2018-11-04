import React, { Component } from "react";
import EventsContainer from "../events";
import "./day.scss";

class DayView extends Component {
  render() {
    const { label, data, cellHeader, current } = this.props;

    return (
      <div
        className={`${
          label !== -1 ? "visible" : "invisible"
        } day-cell ${label}`}
        key={`cell-${label}`}
      >
        <div className="cell-top">
          <span className="day-header-label">{cellHeader}</span>
          <span className={`label`}>
            <span className={`${current ? "current" : ""}`}>
              {label === -1 ? "" : label}
            </span>
          </span>
        </div>
        {data.length > 0 && (
          <EventsContainer events={data} dayOfMonth={label} />
        )}
      </div>
    );
  }
}

export default DayView;
