import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./containers";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";

//initializing the store.
const store = configureStore();

//passing the store down the app. The SPA will be rendered in the root element.
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
