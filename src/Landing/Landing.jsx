import React, { useRef, useEffect, useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/data';
import gsap from 'gsap';
import './Landing.css';
import { ActiveGrid } from '../Components/LandingComponents/ActiveGrid';
import { LandingGrid } from '../Components/LandingComponents/LandingGrid';
import { 
  handleGoTo, 
  handleMouseEnter, 
  handleMouseLeave, 
  handleMouseEnterAbout, 
  handleMouseLeaveAbout 
} from '../functions/landingHandleFunctions';

export const Landing = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const navigate = useNavigate();
  const imgRefs = useRef([]);
  const aboutImgRefs = useRef([]);
  const mainRef = useRef(null);
  const mainGridRef = useRef(null);
  const activeGridRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(mainRef.current, 
      { x: 800, opacity: 0 },
      { x: 0, opacity: 1, ease: "power3.inOut", duration: 1 }
    );
    projects.forEach((project, index) => {
      const element = imgRefs.current[index];
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power3.inOut", delay: index * 0.2 }
        );
      }
    });

    gsap.set(aboutImgRefs.current[0], {
      x: 0,
      y: -800
    });
    gsap.set(aboutImgRefs.current[1], {
      x: -800,
      y: 0
    });
    gsap.set(aboutImgRefs.current[2], {
      x: 800,
      y: 0
    });
  }, []);

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.span === activeCategory);

  useEffect(() => {
    if (mainGridRef.current) {
      gsap.fromTo(mainGridRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "power3.inOut", duration: 0.5, stagger: 0.1 }
      );
    }

    if (activeGridRef.current) {
      gsap.fromTo(activeGridRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "power3.inOut", duration: 0.5, stagger: 0.1 }
      );
    }
  }, [activeCategory]);

  return (
    <main className="landing-container" ref={mainRef}>
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <section className="main-grid">
        <section className="cont">
          {activeCategory === "All" && screenSize > 700 ? (
            <LandingGrid 
              filteredProjects={filteredProjects} 
              mainGridRef={mainGridRef} 
              handleMouseEnter={(index) => handleMouseEnter(index, imgRefs, projects)} 
              handleMouseLeave={(index) => handleMouseLeave(index, imgRefs, projects)} 
              handleMouseEnterAbout={() => handleMouseEnterAbout(aboutImgRefs)}
              handleMouseLeaveAbout={() => handleMouseLeaveAbout(aboutImgRefs)}
              handleGoTo={(id) => handleGoTo(mainRef, navigate, id)} 
              imgRefs={imgRefs} 
              aboutImgRefs={aboutImgRefs}
            />
          ) : (
            <ActiveGrid filteredProjects={filteredProjects} handleGoTo={(id) => handleGoTo(mainRef, navigate, id)} activeGridRef={activeGridRef} />
          )}
        </section>
      </section>
    </main>
  );
}
