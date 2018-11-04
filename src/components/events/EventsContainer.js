import React, { Component } from "react";
import PropTypes from "prop-types";
import EventsView from "./EventsView";
import { connect } from "react-redux";
import { getEventsByDay } from "../../reducers";

class EventsContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    events: PropTypes.array.isRequired,
    dayOfMonth: PropTypes.number.isRequired
  };

  render() {
    const { events } = this.props;
    return <EventsView events={events} />;
  }
}

const mapStateToProps = (state, { events }) => {
  return {
    eventsByDay: getEventsByDay(state, events)
  };
};

export default connect(mapStateToProps)(EventsContainer);
