"use client";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();
  tl.to(position, {
    x: 1.9990061396,
    y: 2.5864087265,
    z: -17.1513550396,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
    onUpdate,
  });
  tl.to(target, {
    x: -0.099355398,
    y: 1.6169336678,
    z: -0.0782657466,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
  });
  tl.to(".jumbotron-section", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
  });
  tl.to(".sound-section-content", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
  });
  tl.to(position, {
    x: 6.419669148,
    y: -8.8159041924,
    z: 11.983723898,
    scrollTrigger: {
      trigger: ".display-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
    onUpdate,
  });
  tl.to(target, {
    x: -0.099355398,
    y: 1.6169336678,
    z: -0.0782657466,
    scrollTrigger: {
      trigger: ".display-section",
      start: "top bottom",
      end: "top top",
      scrub: 1,
      immediateRender: false,
    },
  });
};
