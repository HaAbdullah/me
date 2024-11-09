import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import TurboTypistImage from "../resources/TurboTypist1.png";
import OptiMoveImage from "../resources/OptiMove.png";
import KeyWeImage from "../resources/KeyWe.jpg";
import GradReadyGeese from "../resources/GradReadyGeese.png";
import Channelytics from "../resources/Channelytics.png";
import "./ProjectsSlider.css";

// GitHub SVG
const GitHubLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
  >
    <path
      d="M19.1667 0.343506C16.6497 0.343506 14.1573 0.847809 11.8319 1.82762C9.50649 2.80743 7.39358 4.24357 5.61379 6.05403C2.01934 9.71041 0 14.6695 0 19.8404C0 28.4581 5.50083 35.7694 13.11 38.3625C14.0683 38.5185 14.375 37.9141 14.375 37.3877V34.0927C9.06583 35.2625 7.935 31.4801 7.935 31.4801C7.05333 29.2185 5.8075 28.6141 5.8075 28.6141C4.06333 27.4053 5.94167 27.4442 5.94167 27.4442C7.85833 27.5807 8.87417 29.4524 8.87417 29.4524C10.5417 32.416 13.3592 31.5386 14.4517 31.0707C14.6242 29.8034 15.1225 28.9455 15.6592 28.4581C11.4042 27.9707 6.93833 26.2939 6.93833 18.8656C6.93833 16.7014 7.66667 14.9662 8.9125 13.5819C8.72083 13.0945 8.05 11.0668 9.10417 8.43473C9.10417 8.43473 10.7142 7.90832 14.375 10.4234C15.8892 9.99449 17.5375 9.78002 19.1667 9.78002C20.7958 9.78002 22.4442 9.99449 23.9583 10.4234C27.6192 7.90832 29.2292 8.43473 29.2292 8.43473C30.2833 11.0668 29.6125 13.0945 29.4208 13.5819C30.6667 14.9662 31.395 16.7014 31.395 18.8656C31.395 26.3134 26.91 27.9512 22.6358 28.4386C23.3258 29.043 23.9583 30.2323 23.9583 32.0455V37.3877C23.9583 37.9141 24.265 38.538 25.2425 38.3625C32.8517 35.7499 38.3333 28.4581 38.3333 19.8404C38.3333 17.2801 37.8376 14.7448 36.8744 12.3793C35.9111 10.0138 34.4993 7.86448 32.7195 6.05403C30.9398 4.24357 28.8268 2.80743 26.5014 1.82762C24.176 0.847809 21.6837 0.343506 19.1667 0.343506Z"
      fill="white"
    />
  </svg>
);

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // GitHub and Store URLs
  const githubURLs = [
    "https://github.com/HaAbdullah/TurboTypist",
    "https://github.com/HaAbdullah/OptiMove",
    "https://github.com/HaAbdullah/Keywe",
    "https://github.com/HaAbdullah/StarterHacks/",
  ];

  const storeURLs = [
    "",
    "",
    "https://chromewebstore.google.com/detail/pbbojhhloifmdbggfibbjfihildgehpc",
  ];

  return (
    <section id="projects" className="projects-section">
      <div>
        <div className="PetProjects">
          <h1> Pet Projects </h1>
        </div>
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <img src={OptiMoveImage} alt="OptiMove" />
              <Carousel.Caption>
                <h3>OptiMove</h3>
                <h2>
                  Analyzes an image of a chessboard and provides a recommended
                  move for the given chess position
                </h2>
                <div className="skills-section">
                  <p>Python, OpenCV, TensorFlow, React, JavaScript, Pandas</p>
                  <a
                    href={githubURLs[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {GitHubLogo}
                  </a>
                  {/* <a href={storeURLs[1]} target="_blank" rel="noopener noreferrer" className="store-button">
                  View on Store
                </a> */}
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={Channelytics}
                alt="Channelytics"
                className="carousel-image"
              />
              <Carousel.Caption>
                <h3>Channelytics</h3>
                <h2>
                  Analyze the data behind Youtube videos, channels, and topics
                  through data visualizations and comparisions.
                </h2>
                <div className="skills-section">
                  <p>
                    Django, Pandas, Matplotlib, PostgreSQL, React.js,
                    TypeScript, Tailwind, Material UI, Reduxr
                  </p>
                  <a
                    href={githubURLs[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {GitHubLogo}
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img src={KeyWeImage} alt="KeyWe" />
              <Carousel.Caption>
                <h3>KeyWe</h3>
                <h2>
                  A chrome extension that allows users to associate websites
                  with unique code words facilitating a seamless browsing
                  experience.{" "}
                </h2>
                <div className="skills-section">
                  <p>HTML/CSS, JavaScript, Chrome Storage API</p>
                  <a
                    href={githubURLs[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {GitHubLogo}
                  </a>
                  <a
                    href={storeURLs[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-button"
                  >
                    View in Chrome Web Store
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={GradReadyGeese} alt="GradReadyGeese" />
              <Carousel.Caption>
                <h3>GradReadyGeese</h3>
                <h2>
                  Parses a UWaterloo transcript and uses web scraping to
                  determine courses needed to graduate
                </h2>
                <div className="skills-section">
                  <p>
                    Python, PyPDF, Selenium, Beauitful Soup, HTML/CSS,
                    JavaScript
                  </p>
                  <a
                    href={githubURLs[3]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {GitHubLogo}
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default ControlledCarousel;

{
  /* <Carousel.Item>
<img src={TurboTypistImage} alt="Turbo Typist" />
  <Carousel.Caption>
    <h3>Turbo Typist</h3>
    <h2>An effective and minimalistic desktop application that tests, tracks, and improves your typing speed with a variety of modes, timers, and competitive features.</h2>
    <div className="skills-section">
      <p>Java, JavaFX, XML, SQL, Docker</p>
      <a href={githubURLs[0]} target="_blank" rel="noopener noreferrer">
        {GitHubLogo}
      </a>
    </div>
  </Carousel.Caption>
</Carousel.Item>  */
}
