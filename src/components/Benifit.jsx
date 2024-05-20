import React from "react";
import { LuMicroscope } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Benifit = () => {
  AOS.init({ duration: 2000 });

  return (
    <>
      <div className="benfit_container">
        <h1 data-aos="fade-up">Benefits with Bharti Eye Foundation</h1>
        <p data-aos="fade-up">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <div className="benefit_cards_container">
          <div className="benefit_cards" data-aos="fade-right">
            <FaUserDoctor className="benefit_logo" />
            <h3>Qualified Doctors</h3>
            <p>
              Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore.
            </p>
          </div>
          <div className="benefit_cards" data-aos="fade-left">
            <LuMicroscope className="benefit_logo" />
            <h3>Modern Equipment</h3>
            <p>
              Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore.
            </p>
          </div>
          <div className="benefit_cards" data-aos="fade-right">
            <FaAmbulance className="benefit_logo" />
            <h3>Emergency Help</h3>
            <p>
              Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore.
            </p>
          </div>
          <div className="benefit_cards" data-aos="fade-left">
            <FaHospitalUser className="benefit_logo" />
            <h3>Individual Approach</h3>
            <p>
              Lorem ipsum dolor sit elit consectur sed eiusmod tempor labore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifit;
