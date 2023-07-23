import Aos from "aos";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";

export default function Landing() {
  const spaceshipRef = useRef();

  const startComet = () => {
    const comet = document.getElementById("comet");
    comet.style.animationPlayState = "running";
  };

  const stopComet = () => {
    const comet = document.getElementById("comet");
    comet.style.animationPlayState = "paused";
  };

  useEffect(() => {
    const spaceship = spaceshipRef.current;
    spaceship.addEventListener(
      "timeupdate",
      () => {
        if (spaceship.currentTime >= 14) {
          spaceship.currentTime = 2.23;
          spaceship.play();
        }
      },
      false
    );

    const comet = document.getElementById("comet");
    comet.style.animationPlayState = "paused";

    const unique = document.getElementById("landing-unique");
    unique.addEventListener("mouseover", startComet);
    unique.addEventListener("touchstart", startComet);
    unique.addEventListener("mouseout", stopComet);
    unique.addEventListener("touchend", stopComet);

    spaceship.style.animationPlayState = "paused";
    spaceship.style.transform = "translateX(0)"

    const creative = document.getElementById("creative");
    creative.addEventListener("mouseover", () => {
      spaceship.style.animationPlayState = "running";
    });
    creative.addEventListener("touchstart", () => {
      spaceship.style.animationPlayState = "running";
    });
    creative.addEventListener("mouseout", () => {
      spaceship.style.animationPlayState = "paused";
    });
    creative.addEventListener("touchend", () => {
      spaceship.style.animationPlayState = "paused";
    });

    return () => {
      spaceship.removeEventListener("timeupdate", () => {});
    };
  }, []);

  return (
    <div id="landing-container">
      <video
        autoPlay
        muted
        loop
        id="landing-spaceship"
        src="/space.mp4"
        ref={spaceshipRef}
      ></video>
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
            I design{" "}
            <b
              id="landing-unique"
              className="lighter-yellow-text landing-keyword"
            >
              unique
            </b>{" "}
            and{" "}
            <b id="creative" className="lighter-yellow-text landing-keyword">
              creative
            </b>{" "}
            solutions to remove your discomforts and problems
          </p>
        </div>
        <div id="landing-cta-buttons">
          <Link href="#programming-container">
            <button id="landing-primary">My Work</button>
          </Link>
          <Link href="/store">
            <button id="landing-secondary">Store</button>
          </Link>
        </div>
        <img className="asteroid asteroid1" src="/asteroid1.svg" />
        <img className="asteroid asteroid2" src="/asteroid2.svg" />

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
      <img id="comet" src="/comet.svg" />
    </div>
  );
}
