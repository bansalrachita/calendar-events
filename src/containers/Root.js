import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import App from "./App";

/**
 * @return {JSX} component MonitorWidget.
 * */
export default class Root extends Component {
  /**
   * Renders the view.
   * @return {Function} react element.
   * */
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
/**
 * @type {object} propTypes sets types of properties.
 * */
Root.propTypes = {
  store: PropTypes.object.isRequired
};
