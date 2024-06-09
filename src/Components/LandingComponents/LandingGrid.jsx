import React from 'react'
import "./LandingGrid.css";
import linkerPointer from "../../assets/linkPointer.svg";

export const LandingGrid = ({ 
  filteredProjects, 
  mainGridRef, 
  handleMouseEnter, 
  handleMouseLeave, 
  handleMouseEnterAbout,
  handleMouseLeaveAbout,
  handleGoTo, 
  imgRefs, 
  aboutImgRefs 
}) => {
  return (
    <div className="grid" ref={mainGridRef}>
      {filteredProjects.map((project, index) => (
        <div 
          key={index} 
          className={project.span === "Soon" ? `grid-item-soon ${project.style}`: `grid-item ${project.style}`}
          onMouseEnter={() => {
            if (project.span !== "Soon") handleMouseEnter(index)
          }}
          onMouseLeave={() => {
            if (project.span !== "Soon") handleMouseLeave(index)
          }}
          onClick={() => {
            if (project.span !== "Soon") handleGoTo(project.id)
          }}
          onKeyDown={(event) => {
            if (project.span !== "Soon") {
              if (event.key === 'Enter') handleGoTo(project.id)
            }
          }}
          tabIndex={project.span === "Soon" ? "-1" : "0"} 
        >
          <div className="card-title">
            <h4>
              <span className={project.span.replace(' ', '-')}>{project.span}</span>
              <span className="project-name">{project.name}</span>
            </h4>
            <div className='pointer-container'>
              <img src={linkerPointer} alt="Go to pointer svg" />
            </div>
          </div>
          {project.name !== "About Me" ? (
            <div>
              <img 
                src={project.mainImg} 
                alt={project.name} 
                ref={el => imgRefs.current[index] = el}
                className='main-img'
                style={{
                  '--translate-x': project.translateX,
                  '--translate-y': project.translateY,
                  '--rotate': project.rotate,
                  width: project.width,
                  height: project.height,
                }} 
              />
            </div>
          ):(
            <div className="about-container" onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
              {project.mainImg.map((imgSrc, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={project.name}
                    className="about-me-img"
                    id={project.mainImgClass[imgIndex]}
                    ref={el => aboutImgRefs.current[imgIndex] = el}
                    style={{
                      width: project.width,
                      height: project.height,
                    }}
                  />
                </div>
              ))}
              <img
                src={project.logoImg}
                alt={project.name}
                className="about-me-img"
                id={project.logoImgClass}
                style={{
                  width: project.width,
                  height: project.height,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
