// DEPENDENCY IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENT IMPORTS
import App from "./App";

//STYLE IMPORTS
import "./index.scss";

//CONNECT ROOT HTML TO REACT
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//RENDER APP COMPONENTS IN ROOT HTML
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);
