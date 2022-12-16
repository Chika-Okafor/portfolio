import { GitHub, Instagram, LinkedIn, Menu } from "@mui/icons-material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span id="logo">CHIKA OKAFOR</span>
        <Menu id="nav-btn" />
        {/* <nav id="nav-menu">
          <span className="nav-item">ABOUT</span>
          <span className="nav-item">WORK</span>
          <span className="nav-item">PORTFOLIO</span>
        </nav> */}
      </header>
      <main className="App-main">
        <div id="hero">
          <div className="hero-text">
            FOR THE <br />
            LOVE OF <br />
            ALL THINGS <br />
            FRONTEND <br />
            DEVELOPMENT
          </div>
          <button className="call-to-action">explore my work</button>
        </div>
      </main>
      <footer className="App-footer">
        <span className="socials">
          <Instagram className="social-icon" />
          <LinkedIn className="social-icon" />
          <GitHub className="social-icon" />
        </span>
        <span className="copyright">© 2022 CHIKA OKAFOR</span>
      </footer>
    </div>
  );
}

export default App;
