import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
// import * as serviceWorker from "./serviceWorker";

const renderReactDom = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};
if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
