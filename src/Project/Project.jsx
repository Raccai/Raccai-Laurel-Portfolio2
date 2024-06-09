import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/data';
import gsap from 'gsap';
import "./Project.css";
import { ImageModal } from '../Components/ProjectComponents/ImageModal';
import { ProjectGrid } from '../Components/ProjectComponents/ProjectGrid';
import { ProjectImgsGrids } from '../Components/ProjectComponents/ProjectImgsGrids';
import { handleGoBack, openModal, closeModal } from '../functions/projectHandleFunctions';
import { Button } from '../Components/Button';

export const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectMainRef = useRef(null);
  const currentProject = projects[id];
  const [activeModal, setActiveModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  useEffect(() => {
    gsap.fromTo(projectMainRef.current, 
      { x: 800, opacity: 0 },
      { x: 0, opacity: 1, ease: "power3.inOut", duration: 1 }
    )

    window.scroll(0, 0);
  }, [])

  return (
    <main className="project-container" ref={projectMainRef}>
      {!activeModal ? (
        <section className="project-wrapper">
          <Button text={"Return"} func={handleGoBack(projectMainRef, navigate)}/>

          <h1>{currentProject.name}</h1>

          <ProjectGrid currentProject={currentProject} />

          <ProjectImgsGrids 
            currentProject={currentProject} 
            openModal={(imageUrl) => openModal(projectMainRef, setModalImageUrl, setActiveModal, imageUrl)} 
          />

        </section>
      ) : (
        <section 
          className="modal-overlay" 
          onClick={() => closeModal(projectMainRef, setModalImageUrl, setActiveModal)}
        >
          <ImageModal 
            closeModal={() => closeModal(projectMainRef, setModalImageUrl, setActiveModal)} 
            modalImageUrl={modalImageUrl}
          />
        </section>
      )}
    </main>
  )
}
