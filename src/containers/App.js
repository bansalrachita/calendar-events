import React, { Component } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import CalendarContainer from "../components/calendar";
import history from "./history";

class App extends Component {
  /**
   * @param {object} routes routes json to render.
   * @return {Array} routes to render.
   * */
  renderRoutes = routes =>
    routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={props => <route.component {...props} route={route} />}
      />
    ));

  render() {
    const routes = [
      {
        path: "/",
        component: CalendarContainer,
        exact: true
      }
    ];

    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>{this.renderRoutes(routes)}</Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
