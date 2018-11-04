import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MonthView from "./MonthView";
import getMonthList from "../../utils/getMonthList";
import {
  calendarFetchAllEvents,
  calendarClearAllEvents,
  calendarUpdateMonth,
  calendarUpdateYear
} from "../../actions";

/**
 * @return {JSX} component calendar container component.
 * */
class MonthContainer extends Component {
  /**
   * @type {object} propTypes prop types of the component
   * */
  static propTypes = {
    calendar: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);

    const grid = getMonthList(
      this.props.calendar.currentMonth,
      this.props.calendar.currentYear
    );

    this.state = {
      grid: grid
    };
  }

  componentDidMount = () => {
    //fetches data for the current month and year when the component is mounted.
    this.props.dispatch(calendarFetchAllEvents());
  };

  /**
   * runs after the rendered component gets updated props. Doesn't run on mount.
   * */
  componentDidUpdate = prevProps => {
    const prevMonth = prevProps.calendar.currentMonth,
      currMonth = this.props.calendar.currentMonth,
      prevYear = prevProps.calendar.currentYear,
      currYear = this.props.calendar.currentYear;
    //checks if the date props have changed.
    // yes ? dispatch fetch data from the server : do nothing.
    if (prevMonth !== currMonth) {
      const grid = getMonthList(currMonth, currYear);

      this.setState({ grid });
      this.props.dispatch(calendarFetchAllEvents());

      if (prevYear !== currYear) {
        this.props.dispatch(calendarFetchAllEvents());
      }
    }
  };

  handleOnClick = (event, month, year) => {
    this.props.dispatch(calendarUpdateMonth(month));
    //runs only on change of year.
    if (year) {
      this.props.dispatch(calendarUpdateYear(year));
    }
  };

  componentWillUnmount = () => {
    //clears the redux state of the component.
    this.props.dispatch(calendarClearAllEvents());
  };

  /**
   * Renders the view.
   * @return {Function} react element.
   * */
  render() {
    const { grid } = this.state;
    return (
      <MonthView
        grid={grid}
        {...this.props.calendar}
        handleOnClick={this.handleOnClick}
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

export default connect(mapStateToProps)(MonthContainer);
