import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
  <div className="App">
    <header className="App-header">
  <h1>Hello from React</h1>
  <Weather />
  </header>

   <footer> 
      This page was built by 
      <a href="https://www.linkedin.com/in/heatherk3lly/" target="_blank"> Heather Kelly. </a>
      
      Open source code:
      <a href="https://github.com/heathermkel/Heather-Weather" target="_blank">  Git Hub</a>
     
      </footer>
  </div>
  );
}


export default App;
