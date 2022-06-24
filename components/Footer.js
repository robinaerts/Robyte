export default function Footer() {
  return (
    <div id="footerContainer">
      <div id="footerContent">
        <div className="footerItem">
          <h5 className="footerItemHeading">Robyte</h5>
          <div id="footerItemItems">
            <p className="footerItemItem">Dev</p>
            <p className="footerItemItem">Art</p>
            <p className="footerItemItem">About</p>
            <p className="footerItemItem">Signin</p>
          </div>
        </div>
        <div className="footerItem">
          <h5 className="footerItemHeading">Products</h5>
          <div id="footerItemItems">
            <p className="footerItemItem">Robyte</p>
            <p className="footerItemItem">Familyplanner</p>
            <p className="footerItemItem">Grady</p>
          </div>
        </div>
        <div id="footerContact">
          <h5 className="footerItemHeading">
            Get notified whenever I post a new project
          </h5>
          <input id="footer-input" placeholder="Email..." />
          <button id="footer-submit">SUBMIT</button>
        </div>
      </div>
      <div id="footerCopyright">
        <p>© Copyright 2021: Robyte.com </p>
      </div>
    </div>
  );
}
