import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import MonthContainer from "../components/month";
import history from "./history";
import "./app.css";

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
        component: MonthContainer,
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
