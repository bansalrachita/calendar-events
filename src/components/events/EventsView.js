import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./events.scss";

class EventsView extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    events: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      maxEvents: 3
    };
  }

  render() {
    const { events } = this.props;
    const { maxEvents } = this.state;
    console.log(events);
    return (
      <div className="events-container">
        {events.length > maxEvents && (
          <Fragment>
            {events.slice(0, maxEvents).map((event, index) => (
              <div className="event" key={`event-${index}`}>
                <div className="icon" />
                <div className="text" key={index}>
                  {event.title}
                </div>
              </div>
            ))}
            <div className="non-event">
              and {events.length - maxEvents} more ...
            </div>
          </Fragment>
        )}
        {events.length <= maxEvents &&
          events.map((event, index) => (
            <div className="event" key={`event-${index}`}>
              <div className="icon" />
              <div className="text" key={index}>
                {event.title}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default EventsView;
