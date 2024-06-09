import gsap from 'gsap';

export const handleGoBack = (projectMainRef, navigate) => {
  return () => {
    gsap.to(projectMainRef.current,
      {
        x: -800,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => navigate("/")
      }
    );
  }
};

export const openModal = (projectMainRef, setModalImageUrl, setActiveModal, imageUrl) => {
  gsap.to(projectMainRef.current, 
    { 
      x: '-100%', 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.inOut",
      onComplete: () => {
        setModalImageUrl(imageUrl);
        setActiveModal(true);
        window.scroll(0, 0);
      }
    }
  ).then(() => {
    gsap.fromTo(projectMainRef.current, 
      { 
        x: '100%', 
        opacity: 0, 
      },
      { 
        x: '0%', 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.inOut",
      }
    );
  });
};

export const closeModal = (projectMainRef, setModalImageUrl, setActiveModal) => {
  gsap.to(projectMainRef.current, 
    { 
      x: '-100%', 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.inOut",
      onComplete: () => {
        setModalImageUrl("");
        setActiveModal(false);
        window.scroll(0, 0);
      }
    }
  ).then(() => {
    gsap.fromTo(projectMainRef.current, 
      { 
        x: '100%', 
        opacity: 0, 
      },
      { 
        x: '0%', 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.inOut",
      }
    );
  });
};
