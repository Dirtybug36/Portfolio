import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Aboutme from "./components/about-me/Aboutme";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/topbar/menu/menu";
import React, { useState } from "react";

function App() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Aboutme />
        <Contact />
      </div>
    </div>
  );
}

export default App;
