import React from "react";
import "../stylesheets/Home.css"; 
import Resume from '../assets/images/screenshots/Ahshan-Khan-Resume.pdf'
  // Update the import path

function Home() {
  return (
    <>
      <div id="home" className="home">
        <div className="home-text">
          <h1 className="title">I am Ahshan Khan</h1>
          <p className="role">Web Developer</p>
          {/* Link to the PDF file and set the download attribute */}
          <a href={Resume} download="resume" className="resume" target="blank">
            View Resume
          </a>
          <div className="sidebar"></div>
        </div>
        <h1 className="watermark">web developer</h1>
        <div className="additional-scroll">
          <span>portfolio</span>
          <a href="#portfolio" className="scroll">
            <div className="ball"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
