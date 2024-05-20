import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30" data-aos="zoom-out-up">
                <div className="single-cta">
                  <FaLocationDot className="i" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1/3 East Patel Nagar, New Delhi - 110008.</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30" data-aos="zoom-out-up">
                <div className="single-cta">
                  <IoMdCall className="i" />

                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>011-35577127 / 011-43584748</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30" data-aos="zoom-out-up">
                <div className="single-cta">
                  <IoMdMail className="i" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>eyefoundation.bharti@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5" data-aos="zoom-out-up">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50" data-aos="zoom-out-up">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"></a>
                  </div>
                  <div className="footer-text">
                    <h2>Bharti Eye Foundation</h2>
                    <p>
                      A Centre of Excellence in Eye Care for 37 years, Bharti
                      Eye Foundation was conceptualised and nurtured by Dr. S.
                      Bharti in 1985. The hospital has been accredited for
                      patient safety and quality of care by the National
                      Accreditation Board for Hospitals and Healthcare Providers
                      (NABH) , a constituent Board of Quality Council of India.
                      All super-speciality eye treatment services and
                      investigations are available under one roof.
                    </p>
                  </div>
                  <div className="footer-social-icon" data-aos="zoom-out-up">
                    <span>Follow us</span>
                    <a href="#">
                      <FaFacebook className="socialicon facebook-bg" />
                    </a>
                    <a href="#">
                      <FaTwitter className="socialicon twitter-bg" />
                    </a>
                    <a href="#">
                      <FaGoogle className="socialicon google-bg" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-30"
                data-aos="zoom-out-up"
              >
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-50"
                data-aos="zoom-out-up"
              >
                <div className="footer-widget">
                  <div className="timing">
                    <h4>OPENING HOURS</h4>
                    <p>Week-Days: 9am - 6pm</p>
                    <p>Sunday: CLOSED</p>
                  </div>
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-10">
                    <p>
                      Don't miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <IoIosSend className="btns" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2024, All Right Reserved
                    <a href=""> BHARTI EYE FOUNDATION</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
