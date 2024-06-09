import React from 'react'
import "./ActiveGrid.css";
import linkerPointer from "../../assets/linkPointer.svg";

export const ActiveGrid = ({ filteredProjects, activeGridRef, handleGoTo }) => {
  return (
    <div className="active-grid" ref={activeGridRef}>
      {filteredProjects.map((project, index) => (
        <div
          key={index} 
          className={project.span === "Soon" ? "active-grid-item-soon" : "active-grid-item"}
          onClick={() => {
            if (project.span !== "Soon") handleGoTo(project.id)
          }}
          onKeyDown={(event) => {
            if (project.span !== "Soon") {
              if (event.key === 'Enter') handleGoTo(project.id)
            }}
          }
          tabIndex={project.span === "Soon" ? "-1" : "0"} 
        >
          <div className="active-grid-item-content">
            <div className='pointer-container'>
              <span className={project.span.replace(' ', '-')}>{project.span}</span>
              <img src={linkerPointer} alt="Go to pointer svg" />
            </div>
            <h1>
              <span className="project-name">{project.name}</span>
            </h1>
          </div>

          <div className="active-grid-img">
            <img src={project.detailImgs[0]} alt={project.name} />
          </div>
        </div>
      ))}
    </div>
  )
}
