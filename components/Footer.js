import Link from "next/link";

export default function Footer() {
  return (
    <div id="footerContainer">
      <div id="footerContent">
        <div className="footerItem">
          <h5 className="footerItemHeading">Robyte</h5>
          <div id="footerItemItems">
            <Link href="#programming-container">
              <p className="footerItemItem">Dev</p>
            </Link>
            <Link href="#art-container">
              <p className="footerItemItem">Art</p>
            </Link>
            {/* <Link href="#about-container">
              <p className="footerItemItem">About</p>
            </Link> */}
            <Link href="/login">
              <p className="footerItemItem">Signin</p>
            </Link>
          </div>
        </div>
        <div className="footerItem">
          <h5 className="footerItemHeading">Products</h5>
          <div id="footerItemItems">
            <p className="footerItemItem">Robyte</p>
            <a target="_blank" href="https://familyplanner.ga">
              <p className="footerItemItem">Familyplanner</p>
            </a>
            <a target="_blank" href="https://solar-discover.vercel.app/">
              <p className="footerItemItem">Solar Discover</p>
            </a>
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
