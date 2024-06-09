// src/Components/handleFunctions.js
import gsap from 'gsap';

export const handleGoTo = (mainRef, navigate, id) => {
  gsap.fromTo(mainRef.current, 
    { x: 0, opacity: 1},
    { x: -800, opacity: 0, ease: "power3.inOut", duration: 1, onComplete: () => navigate(`/Project/${id}`) }
  );
};

export const handleMouseEnter = (index, imgRefs, projects) => {
  const element = imgRefs.current[index];
  if (element) {
    if (projects[index].aboutAnimation && projects[index].rotateOnHover) {
      gsap.to(element, { scale: 1.1, rotate: 10, ease: "power3.inOut", duration: 0.2 });
    } else {
      gsap.to(element, { scale: 1.04, ease: "power3.inOut", duration: 0.2 });
    }
  }
};

export const handleMouseLeave = (index, imgRefs, projects) => {
  const element = imgRefs.current[index];
  if (element) {
    if (projects[index].aboutAnimation && projects[index].rotateOnHover) {
      gsap.to(element, { scale: 1, rotate: 0, ease: "power3.inOut", duration: 0.2 });
    } else {
      gsap.to(element, { scale: 1, ease: "power3.inOut", duration: 0.2 });
    }
  }
};

export const handleMouseEnterAbout = (aboutImgRefs) => {
  aboutImgRefs.current.forEach((aboutImgRef) => {
    gsap.to(aboutImgRef, {
      x: 0,
      y: 0,
      ease: "power3.inOut",
      duration: .8,
    });
  });
};

export const handleMouseLeaveAbout = (aboutImgRefs) => {
  gsap.to(aboutImgRefs.current[0], {
    x: 0,
    y: -800,
    ease: "power3.inOut",
    duration: 1,
  });
  gsap.to(aboutImgRefs.current[1], {
    x: -800,
    y: 0,
    ease: "power3.inOut",
    duration: 1,
  });
  gsap.to(aboutImgRefs.current[2], {
    x: 800,
    y: 0,
    ease: "power3.inOut",
    duration: 1,
  });
};
