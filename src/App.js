import React from "react";
import Weather from "./Weather";

import "./App.css";

let api = {
  key:"662503186868ce09efd405e08768d721",
  base:"http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
  <div className="App">
      <div className="container">
        <Weather defaultCity="Austin" />
        
  <Weather />
  

   <footer> 
      This page was built by 
      <a href="https://www.linkedin.com/in/heatherk3lly/" target="_blank"> Heather Kelly. </a>
      
      Open source code:
      <a href="https://github.com/heathermkel/Heather-Weather" target="_blank">  Git Hub</a>
     
      </footer>
  </div>
  </div>
  );
}


export default App;
