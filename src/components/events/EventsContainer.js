import React, { Component } from "react";
import PropTypes from "prop-types";
import EventsView from "./EventsView";

class EventsContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    events: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  render() {
    const { events, isFetching } = this.props;
    return <EventsView events={events} isFetching={isFetching} />;
  }
}

export default EventsContainer;
