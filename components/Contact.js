import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div id="contact-container">
      <div className="section-title-badge">
        <a
          className="nav-badge"
          style={{
            backgroundColor: "#E64747",
          }}
        >
          CONTACT
        </a>
        <h2 className="section-title">Let&apos;s Talk!</h2>
      </div>
      <div id="contact-form-container">
        <form
          id="contact-form"
          action="https://formspree.io/f/moqroqjj"
          method="post"
        >
          <label className="form-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="form-input"
            type="text"
            name="fullname"
            id="fullName"
            required={true}
          />
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            required={true}
          />
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-input"
            style={{ height: "auto" }}
            rows="8"
            name="message"
            id="message"
            required={true}
          ></textarea>
          <input readOnly id="contact-submit" type="SUBMIT" value="Send" />
        </form>
        <div id="socials-container">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/robinaerts0/"
          >
            <AiFillLinkedin className="social-icon" />
          </a>
          {/* <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/robyte.me/"
          >
            <AiFillInstagram className="social-icon" />
          </a> */}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/@robyte"
          >
            <AiFillYoutube className="social-icon" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.twitter.com/robinaerts0"
          >
            <AiFillTwitterCircle className="social-icon" />
          </a>
        </div>
        {/* <video
          // autoPlay
          muted
          // loop
          id="contact-img"
          alt="contact drawing"
          src="/rocket.mp4"
          style={{
            mixBlendMode: "lighten",
            // position: "relative",

            bottom: "1rem",
          }}
        /> */}
      </div>
    </div>
  );
}
