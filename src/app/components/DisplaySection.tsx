"use client";
import { type } from "os";
import React from "react";

type DisplaySectionProps = {
  triggerPreview: () => void;
};

function DisplaySection({ triggerPreview }: DisplaySectionProps) {
  const handleScroll = () => {
    const element = document.querySelector(".jumbotron-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display unlike any other. <sup>2</sup>
      </span>
      <button className="button" onClick={triggerPreview}>
        Try It Yourself!
      </button>
      <button className="back-button" onClick={handleScroll}>
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
