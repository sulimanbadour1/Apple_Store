"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";

export default function Home() {
  interface WebgiViewerRef extends HTMLDivElement {
    triggerPreview: () => void;
  }

  const webgiViewerRef = useRef<WebgiViewerRef>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePreview = () => {
    webgiViewerRef.current?.triggerPreview();
  };
  return (
    <div className="App">
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}
