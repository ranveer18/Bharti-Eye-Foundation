import React from "react";
import { FaCheck } from "react-icons/fa6";

const Aboutus = () => {
  return (
    <>
      <div className="About-container">
        <h1>Who We Are?</h1>

        <div className="aboutcontent-container">
          <div className="about-right">
            <h2 data-aos="fade-up" data-aos-duration="3000">
              ONE OF INDIA'S LEADING OPHTHALMOLOGISTS.
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000">
              Bharti Group of Eye Hospitals, a brainchild of Dr. Sudhank Bharti,
              started its journey way back in 1985. Dr. Bharti practised his
              specialization in Cornea, Cataract & Refractive Surgery in England
              with Dr. J. J. Kanski & R. Hitchings. On his return to India he
              founded Bharti Eye Foundation in 1985. An outstanding name in
              Ophthalmology across the country & abroad, Dr. Bharti had the
              privilege of starting for the first time in Delhi & NCR a number
              of high-tech centres in ophthalmic examination and surgeries which
              have been providing clinical services with state of the art
              technology, adopted worldwide. He had been an international
              investigator for NIDEK JAPAN. He has also presented over 50
              original papers in various professional forums including AIOS,
              ASCRS, ESCRS, AAO, APAO, Korean SCRS & DOS. For his outstanding
              contribution to the field of Ophthalmology, Dr. Bharti has been
              felicitated a number of times in India and abroad. Dr. Bharti has
              contributed 5 chapters in Ophthalmic textbooks and has been
              conducting instruction courses in ASCRS, ESCRS & AIOS for the past
              15 years.
            </p>
            <div className="target">
              <div className="mission">
                <h3 data-aos="fade-right" data-aos-duration="3000">
                  Our Mission
                </h3>
                <span>
                  <p data-aos="fade-right" data-aos-duration="3000">
                    <FaCheck /> High-quality work
                  </p>
                  <p data-aos="fade-right" data-aos-duration="3000">
                    <FaCheck /> Straightforward pricing
                  </p>
                  <p data-aos="fade-right" data-aos-duration="3000">
                    <FaCheck /> Rapid response times
                  </p>
                </span>
              </div>
              <div className="mission">
                <h3 data-aos="fade-left" data-aos-duration="3000">
                  Our Vision
                </h3>
                <span>
                  <p data-aos="fade-left" data-aos-duration="3000">
                    <FaCheck /> Emergency power solutions
                  </p>
                  <p data-aos="fade-left" data-aos-duration="3000">
                    <FaCheck /> Wiring and installation
                  </p>
                  <p data-aos="fade-left" data-aos-duration="3000">
                    <FaCheck /> Full-service electrical layout
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="about-left">
            <img
              data-aos="zoom-in-down"
              src="http://azim.commonsupport.com/Optcare/assets/images/resource/about-1.jpg"
              alt=""
            />
            <div className="experience_card" data-aos="fade-up-right">
              <p style={{ fontSize: "50px" }}>30+</p>
              <p> Years of Experience in This Field</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
