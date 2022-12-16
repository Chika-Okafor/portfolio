import { GitHub, Instagram, LinkedIn, Menu } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
