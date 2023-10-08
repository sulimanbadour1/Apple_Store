import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";

export default function Home() {
  return (
    <>
      <Nav />

      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </>
  );
}
