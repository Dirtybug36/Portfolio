import "./aboutme.scss";
import { Icon } from "@iconify/react";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="container">
        <div className="card">
          <div className="top">My experience</div>
          <div className="center">
            <ul>
              <Icon
                icon="material-symbols:battery-horiz-000"
                width="25"
                height="25"
                inline={true}
              />
              HTML
              <li>Experienced</li>
            </ul>
            <ul>
              <Icon
                icon="material-symbols:battery-horiz-050"
                width="25"
                height="25"
                inline={true}
              />
              CSS
              <li>Intermediate</li>
            </ul>
            <ul>
              <Icon
                icon="material-symbols:battery-horiz-050"
                width="25"
                height="25"
                inline={true}
              />
              JavaScript
              <li>Intermediate</li>
            </ul>
            <ul>
              <Icon
                icon="material-symbols:battery-horiz-050"
                width="25"
                height="25"
                inline={true}
              />
              GIT and GIT Hub
              <li>Experienced</li>
            </ul>
            <ul>
              <Icon
                icon="material-symbols:battery-horiz-075-rounded"
                width="25"
                height="25"
                inline={true}
              />
              React
              <li>Beginner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="top">My Introduction</div>
          <div className="center">
            HI! My name is Bimarsha basyal. After having worked in the
            Hospitality industry for many years, I came to realize that my
            passion always is Computer Science. I started to learn programming
            at my free time whilst working in a restaurant fulltime.I decided to
            take a break from working and fully focus myself on my transition to
            a new career.Finally,I managed to develop myself professional to a
            level where I consider myself ready to seek any entry-level Front
            End Developer positon.
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="top">What I Offer! </div>
          <div className="center">
            <ul>
              <li>Designing Websites</li>
              <li>Creating Prototypes</li>
              <li>Testing Websites</li>
              <li>Proper Structuring</li>
              <li>Responsive designs</li>
              <li>Writing and reviewing content</li>
              <li>Building sites according to client needs</li>
              <li>Creating Content to match customer interest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
