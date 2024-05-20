import React from "react";
import photo from "../images/bg.png";
const Specialists = () => {
  return (
    <>
      <div className="Specialists_container">
        <h1>Why Choose Us</h1>
        <div className="Specialists_container_inner">
          <div className="Specialists_container_left">
            <img data-aos="zoom-in-right" src={photo} alt="" />
          </div>
          <div className="Specialists_container_left">
            {/* <img src={photo} alt="" /> */}
            <h3 data-aos="zoom-in">
              Great Reasons For People Choose Bharti Eye Foundation
            </h3>
            <p data-aos="zoom-in">
              Bharti Eye Foundation is one of the best eye hospital in Delhi,
              India. It is a NABH accredited hospital known for its
              state-of-the-art facilities, experienced doctors, and eye care
              services. The eye foundation offers a wide range of eye
              treatments, including cataract surgery, LASIK surgery, glaucoma
              treatment, retina surgery, and many other eye services.
            </p>
            <div className="Specialists_card_container">
              <div className="Specialists_card_container-left">
                <div className="specialists_details">
                  <h3 data-aos="zoom-in">Quality Staff</h3>
                  <p data-aos="zoom-in">
                    Lorem ipsum dolor amet conadicing sed do usmod tempor.
                  </p>
                </div>
                <div className="specialists_details">
                  <h3 data-aos="zoom-in">Quality Assistance</h3>
                  <p data-aos="zoom-in">
                    Lorem ipsum dolor amet conadicing sed do usmod tempor.
                  </p>
                </div>
              </div>
              <div className="Specialists_card_container-right">
                <div className="specialists_details">
                  <h3 data-aos="zoom-in">Affordable Price</h3>
                  <p data-aos="zoom-in">
                    Lorem ipsum dolor amet conadicing sed do usmod tempor.
                  </p>
                </div>
                <div className="specialists_details">
                  <h3 data-aos="zoom-in">Optimized Solutions</h3>
                  <p data-aos="zoom-in">
                    Lorem ipsum dolor amet conadicing sed do usmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialists;
