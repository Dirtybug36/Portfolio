import "./topbar.scss";
import { Icon } from "@iconify/react";

export default function Topbar() {
  return (
    <nav className="topbar ">
      <section className="left-section">
        <a href="#portfolio">Portfolio</a>
        <a href="#aboutme">About me</a>
        <a href="#Contact">Contact</a>
      </section>

      <section className="right-section">
        <div className="number">
          <Icon icon="bi:person-fill" width="20" height="20" className="icon" />
          <span>+351920061831</span>
        </div>
        <div className="gmail">
          <Icon icon="mdi:gmail" width="22" height="22" className="icon" />
          <span>vimarsha.buddy@gmail.com</span>
        </div>

        <a href="#Intro" className="logo">
          {/* this a href is used when ever we click to the buddy,it will come to the intro page  */}
          <Icon
            icon="bi:arrow-up-circle"
            width="30"
            height="30"
            className="right-icon"
          />
        </a>
      </section>
    </nav>
  );
}
