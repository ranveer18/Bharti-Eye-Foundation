import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 0) {
          navRef.current.classList.add("sticky");
        } else {
          navRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="logo">
        <img src="https://bhartieyefoundation.in/img/logo11.webp" alt="Logo" />
      </div>
      <div className="navLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Find Eye Specialist</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Know Your Eye</a>
        </li>
        <li>
          <a href="#">Disease</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
