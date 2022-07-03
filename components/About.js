import { BiGlobe } from "react-icons/bi";
import { DiReact, DiHtml5, DiCss3, DiNodejsSmall } from "react-icons/di";
import {
  SiNextdotjs,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiBlender,
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiFlutter,
  SiCsharp,
  SiCplusplus,
  SiPython,
  SiElectron,
} from "react-icons/si";
import { IoMdCube, IoMdBrush } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { FaDesktop } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div id="about-container">
        <div className="section-title-badge">
          <h2 className="section-title">Who Am I?</h2>
          <a
            className="nav-badge"
            style={{
              marginLeft: "2.5rem",
              backgroundColor: "#efba13",
            }}
          >
            ABOUT
          </a>
        </div>
        <div id="about-me-container">
          <div>
            <img id="profile-img" src="/me.png" alt="me" />
            <h3 id="profile-name">ROBIN AERTS</h3>
          </div>
          <div id="welcome-text-container" style={{ width: "60%" }}>
            <h3 id="welcome-text">Welcome to Robyte!</h3>
            <p className="about-text">
              My name is Robin Aerts. I&apos;m a <strong>developer</strong> and
              a <strong>creative artist</strong>. My goal with Robyte is to make
              your life easier and to automate the repetitive tasks in your
              life.
            </p>
            <br />
            <p className="about-text">
              Meanwhile you can also enjoy my <strong>artwork</strong>. I hope
              it inspires you and that it brings you an extra spark of life.
            </p>
          </div>
        </div>
      </div>
      <div id="skills-container">
        {/* WEB */}
        <div className="skill-category">
          <BiGlobe className="skill-headlogo" />
          <h3 className="skill-title">WEB</h3>
          <p className="skill-description">
            I build fast and responsive web apps
          </p>
          <div className="skill-icons">
            <DiReact />
            <SiNextdotjs />
            <DiHtml5 />
            <DiCss3 />
            <SiJavascript />
            <SiFirebase />
            <SiMongodb />
            <DiNodejsSmall />
          </div>
        </div>
        {/* 3D */}
        <div className="skill-category">
          <IoMdCube className="skill-headlogo" />
          <h3 className="skill-title">3D</h3>
          <p className="skill-description">I model and animate 3D scenes</p>
          <div className="skill-icons">
            <SiBlender />
          </div>
        </div>
        {/* DESIGN */}
        <div className="skill-category">
          <IoMdBrush className="skill-headlogo" />
          <h3 className="skill-title">DESIGN</h3>
          <p className="skill-description">
            I create and animate digital scenes
          </p>
          <div className="skill-icons">
            <SiAdobeillustrator />
            <SiAdobephotoshop />
            <SiAdobeaftereffects />
            <SiAdobepremierepro />
            <SiAdobexd />
          </div>
        </div>
        {/* MOBILE */}
        <div className="skill-category">
          <FiSmartphone className="skill-headlogo" />
          <h3 className="skill-title">MOBILE</h3>
          <p className="skill-description">
            I built mobile cross-platforms applications
          </p>
          <div className="skill-icons">
            <SiFlutter />
          </div>
        </div>
        {/* DESKTOP */}
        <div className="skill-category">
          <FaDesktop className="skill-headlogo" />
          <h3 className="skill-title">DESKTOP</h3>
          <p className="skill-description">I built native desktop apps</p>
          <div className="skill-icons">
            <SiCsharp />
            <SiCplusplus />
            <SiPython />
            <SiElectron />
          </div>
        </div>
      </div>
    </>
  );
}
