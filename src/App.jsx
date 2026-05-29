import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About/About";
// import Blog from "./pages/Blog/Blog";

import Contact from "./pages/Contact/Contact";

// import FeaturedProjects from "./pages/Featured Projects/FeaturedProjects";

// import GithubStats from "./pages/Github Stats/GithubStats";

import Hero from "./pages/Hero/Hero";

// import Products from "./pages/Products/Products";

import Skills from "./pages/Skills/Skills";

// import Testimonials from "./pages/Testimonials/Testimonials";

import Timeline from "./pages/Timeline/Timeline";

import InstallationScreen from "./components/InstallationScreen/InstallationScreen";

import BootScreen from "./components/BootScreen/BootScreen";

import ShutdownScreen from "./components/ShutdownScreen/ShutdownScreen";
import SEO from "./components/SEO/SEO";

function App() {
  /* ====================================================== */
  /* SYSTEM STATES */
  /* ====================================================== */

  const [systemState, setSystemState] =
    useState("install");

  /*
  
  STATES:
  
  install
  boot
  running
  shutdown
  
  */

  return (
    <>

    <SEO />

      {/* ====================================================== */}
      {/* INSTALL SCREEN */}
      {/* ====================================================== */}

      {systemState === "install" && (
        <InstallationScreen
          onComplete={() =>
            setSystemState("boot")
          }
        />
      )}

      {/* ====================================================== */}
      {/* BOOT SCREEN */}
      {/* ====================================================== */}

      {systemState === "boot" && (
        <BootScreen
          onComplete={() =>
            setSystemState("running")
          }
        />
      )}

      {/* ====================================================== */}
      {/* MAIN PORTFOLIO */}
      {/* ====================================================== */}

      {systemState === "running" && (
        <>
          {/* NAVBAR */}
          <Navbar />

          {/* HERO */}
          <Hero
            setSystemState={setSystemState}
          />

          {/* ABOUT */}
          <About />

          {/* SKILLS */}
          <Skills />

          {/* PROJECTS */}
          {/* <FeaturedProjects /> */}

          {/* PRODUCTS */}
          {/* <Products /> */}

          {/* TIMELINE */}
          <Timeline />

          {/* GITHUB */}
          {/* <GithubStats /> */}

          {/* TESTIMONIALS */}
          {/* <Testimonials /> */}

          {/* BLOG */}
          {/* <Blog /> */}

          {/* CONTACT */}
          <Contact />

          {/* FOOTER */}
          <Footer />
        </>
      )}

      {/* ====================================================== */}
      {/* SHUTDOWN SCREEN */}
      {/* ====================================================== */}

      {systemState === "shutdown" && (
        <ShutdownScreen
          onStart={() =>
            setSystemState("boot")
          }
        />
      )}
    </>
  );
}

export default App;