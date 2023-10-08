"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"; //Iphone 14 Pro
import Iphone15 from "../assets/images/iphone15.png"; //Iphone 15 Pro
import Link from "next/link";

const Jumbotron = () => {
  const handleScroll = () => {
    const element = document.querySelector(".sound-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <Image className="logo" src={Iphone} alt="Iphone 14 Pro" />
      <p className="text">Titanium Stronger.</p>
      <span className="description">
        From $699 before trade-in* <sup>1</sup>
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleScroll}>
            Learn more
          </a>
        </li>
      </ul>
      {/* <Image className="iphone-img" src={Iphone15} alt="Iphone 14 Pro" /> */}
    </div>
  );
};

export default Jumbotron;
