import "./intro.scss";

import { Icon } from "@iconify/react";
export default function Intro() {
  return (
    <div className="intro" id="Intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There! I'm</h2>
          <h1>Bimarsha Basyal</h1>
          <h3>
            Front-end <span>Developer</span>
          </h3>

          <a href="#portfolio">
            <Icon
              icon="bi:chevron-double-down"
              width="100"
              height="100"
              className="right-icon"
            />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img class="buddy" src="assests/vimarsha.PNG" alt="pic" />
        </div>
      </div>
    </div>
  );
}
