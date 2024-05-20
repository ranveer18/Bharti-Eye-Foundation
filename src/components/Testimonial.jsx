import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const testimonialsRef = useRef();

  const testimonials = [
    {
      content:
        "Initially I tried various treatment for my condition, but none could help me with it. I heard from a friend that Bharti Eye Foundation might help me with my condition. My experience with them has been good and I am feeling better with their Ayurveda treatment.",
      name: "Nageshwar Rao (Age – 58 years)",
      image: <FaUserCircle />,
    },
    {
      content:
        "My family is a strong believer of ayurvedic medicines and when we heard that there are medicines for retinal disorders my son insisted me on taking medicines from Bharti Eye Foundation. It really helped and the doctors are very gentle in explaining things to me.",
      name: "Moodliar (Age – 70 years)",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      content:
        "I was not aware of what my eye condition was till I met doctors from Bharti Eye Foundation. They patiently explained the issue and what the treatment could be like. I am glad that I visited their clinic.",
      name: "Sudha Madhavi (Age – 21 years) ",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      content:
        "Bharti Eye Foundation has helped me with my condition and I like to thank them for taking such good care of me and helping me understand the problem and most importantly I could continue with my allopathic diabetic medicines while I was taking Ayurvedic Treatment.",
      name: "Kuldeep Singh (Age – 69 years)",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      content:
        "I was so worried with the issue I was facing with my retinal disorder and that too with no knowledge of my condition, but when I visited the clinic they made me aware of my disorder and explained the way they will take care of it with Ayurveda Treatment.I would recommend Bharti Eye Foundation for any such retinal disorder treatment.",
      name: "Vijay Saini (Age – 22 years), R",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      content:
        "I was apprehensive at first to visit Bharti Eye Foundation so I spoke to couple of people who were taking treatment from them, my cousin from Delhi then confirmed that Bharti Eye Foundation does treat lot of Retinal issues and so I began my treatment and I am glad I did.",
      name: "Sangeeta (Age – 37 years),",
      image:
        "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const testimonialsToShow = 3;

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === testimonials.length) {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }
    };

    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (testimonials.length + 1)
      );
    }, 2000);

    testimonialsRef.current.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    return () => {
      clearInterval(interval);
      testimonialsRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex, testimonials.length]);

  return (
    <>
      <div className=" testimonialscontainer">
        <div className="h1container">
          <h1>What Our Client Say About Eyecare</h1>
        </div>
        <div
          className="testimonial-carousel"
          ref={testimonialsRef}
          style={{
            transform: `translateX(-${
              currentIndex * (100 / testimonialsToShow)
            }%)`,
            transition: transitionEnabled
              ? "transform 0.5s ease-in-out"
              : "none",
          }}
        >
          {testimonials
            .concat(testimonials.slice(0, testimonialsToShow))
            .map((testimonial, index) => (
              <div key={index} className="testimonial" data-aos="zoom-out-up">
                <div className="testimonial-content">
                  <p>{testimonial.content}</p>
                </div>
                <div className="testimonial-info">
                  <div className="pic">
                    {/* <img src={testimonial.image} alt={testimonial.name} /> */}
                    <FaUserCircle className="testimonial_icon" />
                  </div>
                  <h3 className="testimonial-title">
                    <a href="#">{testimonial.name}</a>
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
