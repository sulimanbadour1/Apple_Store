"use client";
import React from "react";

const SoundSection = () => {
  const handleScroll = () => {
    const element = document.querySelector(".display-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the Difference.</p>
          <span className="description">Powerful sound system</span>
          <ul className="links">
            <li className="">
              <button className="button">Buy</button>
            </li>
            <li className="">
              <a className="link" onClick={handleScroll}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
