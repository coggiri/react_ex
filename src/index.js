import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import EventPractice from "./EventPractice";
class App extends Component {
  render() {
    return <EventPractice />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
