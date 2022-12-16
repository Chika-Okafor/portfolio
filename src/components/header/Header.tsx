import { Menu } from "@mui/icons-material";

import "./Header.scss";

export default function Header() {
  return (
    <header className="App-header">
      <span id="logo">CHIKA OKAFOR</span>
      <Menu id="nav-btn" />
      {/* <nav id="nav-menu">
          <span className="nav-item">ABOUT</span>
          <span className="nav-item">WORK</span>
          <span className="nav-item">PORTFOLIO</span>
        </nav> */}
    </header>
  );
}
