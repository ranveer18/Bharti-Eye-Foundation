import React, { useState, useEffect, useRef } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";

const Achievement = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const [startCount1, setStartCount1] = useState(false);
  const [startCount2, setStartCount2] = useState(false);
  const [startCount3, setStartCount3] = useState(false);
  const [startCount4, setStartCount4] = useState(false);

  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);
  const counterRef4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === counterRef1.current) setStartCount1(true);
            if (entry.target === counterRef2.current) setStartCount2(true);
            if (entry.target === counterRef3.current) setStartCount3(true);
            if (entry.target === counterRef4.current) setStartCount4(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (counterRef1.current) observer.observe(counterRef1.current);
    if (counterRef2.current) observer.observe(counterRef2.current);
    if (counterRef3.current) observer.observe(counterRef3.current);
    if (counterRef4.current) observer.observe(counterRef4.current);

    return () => {
      if (counterRef1.current) observer.unobserve(counterRef1.current);
      if (counterRef2.current) observer.unobserve(counterRef2.current);
      if (counterRef3.current) observer.unobserve(counterRef3.current);
      if (counterRef4.current) observer.unobserve(counterRef4.current);
    };
  }, []);

  useEffect(() => {
    const animateCount = (setCount, end, isFloat) => {
      let start = 0;
      const duration = 3000;
      const incrementTime = duration / (isFloat ? 100 : end);

      const timer = setInterval(() => {
        start += isFloat ? 0.01 : 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    };

    if (startCount1) animateCount(setCount1, 300, false);
    if (startCount2) animateCount(setCount2, 2.6, true);
    if (startCount3) animateCount(setCount3, 1200, false);
    if (startCount4) animateCount(setCount4, 55, false);
  }, [startCount1, startCount2, startCount3, startCount4]);

  return (
    <>
      <div className="achivement_container">
        <div className="achivementsection">
          <span data-aos="fade-up">
            <FaUserDoctor className="achievement_logo" />
            <div className="achivementdetails" ref={counterRef1}>
              <p>{count1}+</p>
              <p>Expert Doctors</p>
            </div>
          </span>
          <span data-aos="fade-up">
            <MdMedicalServices className="achievement_logo" />
            <div className="achivementdetails" ref={counterRef2}>
              <p>{count2.toFixed(2)}K</p>
              <p>Different Services</p>
            </div>
          </span>
          <span data-aos="fade-up">
            <RiEmotionHappyFill className="achievement_logo" />
            <div className="achivementdetails" ref={counterRef3}>
              <p>{count3}+</p>
              <p>Happy Patients</p>
            </div>
          </span>
          <span data-aos="fade-up">
            <FaAward className="achievement_logo" />
            <div className="achivementdetails" ref={counterRef4}>
              <p>{count4}+</p>
              <p>Awards Won</p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Achievement;
