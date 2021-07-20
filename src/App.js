import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Austin" />

      <footer>
        This page was built by
        <a href="https://www.linkedin.com/in/heatherk3lly/" target="_blank">
          {" "}
          Heather Kelly.{" "}
        </a>
        Open source code:
        <a
          href="https://github.com/heathermkel/Heather-Weather"
          target="_blank"
        >
          {" "}
          Git Hub
        </a>
      </footer>
    </div>
    </div>
  );
}

