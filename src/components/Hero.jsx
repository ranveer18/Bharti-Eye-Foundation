import React from "react";
// import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
const Hero = () => {
  AOS.init({ duration: 2000 });
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h3 data-aos="fade-up">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Eye Care & Holistic Center")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Eye Care & Holistic Center")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Eye Care & Holistic Center")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Eye Care & Holistic Center")
                    .start();
                }}
              />
            </h3>
            <h1 data-aos="fade-left">Bharti Eye Foundation</h1>
            <p data-aos="fade-right">
              We Solve all your Eye care need Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo, pariatur?
            </p>
            {/* <button className="btn">Contact Now</button> */}
            <div className="button">
              <a href="#contact" className="btn fx01">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img
              data-aos="zoom-in"
              src="https://azim.commonsupport.com/Optcare/assets/images/banner/banner-img-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
