export default function Landing() {
  return (
    <div id="landing-container">
      <img alt="spaceship" src="/spaceship.png" id="landing-spaceship" />
      <div
        style={{
          zIndex: 4,
        }}
      >
        <div id="landing-text">
          <h1 className="landing-robyte">
            R<span className="yellow-text">0</span>B
            <span className="yellow-text">1</span>TE
          </h1>
          <p id="landing-subtext">
            I design <b>unique</b> and <b>creative</b> solutions to remove your
            discomforts and problems
          </p>
        </div>
        <ul id="nav-badges">
          <a
            href="#programming-container"
            className="nav-badge"
            style={{ backgroundColor: "#8CA3BF" }}
          >
            DEV
          </a>
          <a
            href="#art-container"
            className="nav-badge"
            style={{ backgroundColor: "#97C490" }}
          >
            ART
          </a>
          <a
            href="#about-container"
            className="nav-badge bigscreen"
            style={{ backgroundColor: "#EFBA13" }}
          >
            ABOUT
          </a>
          <a
            href="#contact-container"
            className="nav-badge bigscreen"
            style={{ backgroundColor: "#E64747" }}
          >
            CONTACT
          </a>
        </ul>
        <svg
          id="scroll-icon"
          version="1.1"
          width="80px"
          height="80px"
          viewBox="30.5 -9.5 554 813"
        >
          <path
            d="M328,0h-44C271.68,0,42,5.28,42,242v308c0,9.9,3.96,242,242,242h44c13.86,0,242-6.16,242-242V242C570,232.1,566.04,0,328,0z
               M526,550c0,191.62-177.76,198-198,198h-44C92.38,748,86,570.24,86,550V242C86,50.82,263.54,44,284,44h44
               c191.62,0,198,177.76,198,198V550z"
          />
          <circle cx="306" cy="231" r="45" />
        </svg>
      </div>
      <img alt="moon" src="/moon.png" id="landing-moon" />
    </div>
  );
}
