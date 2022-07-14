import "./contact.scss";
import { Icon } from "@iconify/react";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="Contact">
      <div className="left">
        <div className="container">
          <div className="icon">
            <Icon icon="mdi:gmail" width="30" height="30" />
          </div>
          <div className="name">Gmail</div>
          <div className="myname">vimarsha.buddy@gmail.com</div>
        </div>
        <div className="container">
          <div className="icon">
            <Icon icon="akar-icons:linkedin-v1-fill" width="30" height="30" />
          </div>
          <div className="name">LinkedIn</div>
          <div className="myname">Bimarsha basyal</div>
        </div>
        <div className="container">
          <div className="icon">
            <Icon icon="ri:whatsapp-fill" width="30" height="30" />
          </div>
          <div className="name">WhatsApp</div>
          <div className="myname">+351920061831</div>
        </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
