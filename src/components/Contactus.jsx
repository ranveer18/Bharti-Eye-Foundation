import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="contact_container" id="contact">
        <h1>Need a Doctor for Check-up?</h1>

        <div className="contact_container_card">
          <div
            className="contact_container_card_right zindex"
            data-aos="fade-right"
          >
            <h1>
              Get Appointment If
              <span style={{ alignSelf: "center" }}>You</span>
              Need Cosultation
            </h1>
            <form action="" className="zindex">
              <div className="input_container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input_container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter a valid Email"
                  required
                />
                <label htmlFor="name">Email Address</label>
              </div>
              <div className="input_container">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your Phone Number"
                  required
                />
                <label htmlFor="name">Phone Number</label>
              </div>
              <div className="input_container">
                <textarea
                  type="text"
                  id="name"
                  placeholder="Write message"
                  required
                />
                <label htmlFor="name">Your Message</label>
              </div>
              <button type="submit" className="btn form_btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact_container_card_right" data-aos="fade-left">
            <img
              src="	http://azim.commonsupport.com/Optcare/assets/images/background/video-bg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      ̉
    </>
  );
};

export default Contactus;
