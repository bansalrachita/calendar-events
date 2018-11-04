import React, { Component } from "react";
import EventsContainer from "../events";
import "./day.scss";

class DayView extends Component {
  render() {
    const { label, data, cellHeader, current, index } = this.props;

    return (
      <div
        className={`${label !== -1 ? "visible" : "invisible"} day-container`}
        key={`day-${index}`}
      >
        <div className="day-header">
          <span className="left-label">{cellHeader}</span>
          <span className={`right-label`}>
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
