import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  calendarFetchAllEvents,
  calendarClearAllEvents,
  calendarUpdateMonth,
  calendarUpdateYear
} from "../../actions";
import PropTypes from "prop-types";
import CalendarView from "./CalendarView";
import getMonthMatrix from "../../utils/getMonthMtrix";

class CalenderContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    calendar: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);

    const grid = getMonthMatrix(
      this.props.calendar.currentMonth,
      this.props.calendar.currentYear,
      this.props.calendar.days
    );

    this.state = {
      grid: grid
    };
  }

  componentDidMount = () => {
    this.props.dispatch(calendarFetchAllEvents());
  };

  componentDidUpdate = prevProps => {
    if (prevProps.calendar.currentMonth !== this.props.calendar.currentMonth) {
      const grid = getMonthMatrix(
        this.props.calendar.currentMonth,
        this.props.calendar.currentYear,
        this.props.calendar.days
      );

      this.setState({ grid });
    }

    if (prevProps.calendar.currentYear !== this.props.calendar.currentYear) {
      this.props.dispatch(calendarFetchAllEvents());
    }
  };

  handleOnClickNext = (event, nextMonth, nextYear) => {
    this.props.dispatch(calendarUpdateMonth(nextMonth));
    if (nextYear) {
      this.props.dispatch(calendarUpdateYear(nextYear));
    }
  };

  handleOnClickPrev = (event, prevMonth, prevYear) => {
    this.props.dispatch(calendarUpdateMonth(prevMonth));
    if (prevYear) {
      this.props.dispatch(calendarUpdateYear(prevYear));
    }
  };

  componentWillUnmount = () => {
    this.props.dispatch(calendarClearAllEvents());
  };

  render() {
    const { grid } = this.state;
    return (
      <CalendarView
        grid={grid}
        {...this.props.calendar}
        handleOnClickPrev={this.handleOnClickPrev}
        handleOnClickNext={this.handleOnClickNext}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    calendar: state.calendar,
    dispatch: state.dispatch
  };
};

export default connect(mapStateToProps)(CalenderContainer);
