export default function Contact() {
  return (
    <div id="contact-container">
      <div className="section-title-badge">
        <h2 className="section-title">Let&apos;s Talk!</h2>
        <a
          className="nav-badge"
          style={{
            marginLeft: "2.5rem",
            backgroundColor: "#E64747",
          }}
        >
          CONTACT
        </a>
      </div>
      <div>
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
            rows="5"
            name="message"
            id="message"
            required={true}
          ></textarea>
          <input id="contact-submit" type="SUBMIT" value="Submit" />
        </form>
      </div>
    </div>
  );
}
