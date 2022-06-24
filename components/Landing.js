export default function Landing() {
  return (
    <div id="landing-container">
      <div id="landing-text">
        <h1 className="landing-robyte">
          R<span className="yellow-text">0</span>B
          <span className="yellow-text">1</span>TE
        </h1>
        <p id="landing-subtext">
          Here comes the sub - text in two lines. Some more text to fill it up
        </p>
      </div>
      <ul id="nav-badges">
        <li className="nav-badge" style={{ backgroundColor: "#8CA3BF" }}>
          DEV
        </li>
        <li className="nav-badge" style={{ backgroundColor: "#97C490" }}>
          ART
        </li>
        <li className="nav-badge" style={{ backgroundColor: "#EFBA13" }}>
          ABOUT
        </li>
      </ul>
    </div>
  );
}
