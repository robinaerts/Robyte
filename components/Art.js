import ArtProject from "./ArtProject";

export default function Art() {
  return (
    <div id="art-container">
      <div id="art-text">
        <div className="section-title-badge">
          <h2 className="section-title">Recent Art</h2>
          <a
            className="nav-badge"
            style={{
              marginLeft: "2.5rem",
              backgroundColor: "#97C490",
            }}
          >
            ART
          </a>
        </div>
        <p className="section-title-description">
          In my free time I love to make art
        </p>
      </div>
      <div id="programming-projects-container">
        <ArtProject />
        <ArtProject />
        <ArtProject />
        <ArtProject />
        <ArtProject />
        <ArtProject />
      </div>
    </div>
  );
}
