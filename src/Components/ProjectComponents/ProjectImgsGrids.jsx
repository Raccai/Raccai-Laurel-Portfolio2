import React from 'react'
import "./ProjectImgsGrid.css"

export const ProjectImgsGrids = ({ currentProject, openModal }) => {
  return (
    <div className="project-imgs-grid">
      {currentProject.detailImgs.map((img, index) => (
        <div 
          key={index} 
          className="project-imgs-grid-item" 
          id={`image${index}`} 
          onClick={() => openModal(img)}
          tabIndex="0" 
          onKeyDown={(event) => {if (event.key === 'Enter') openModal(img)}}
        >
          <img src={img} className={`project-img`} />
        </div>
      ))}
    </div>
  )
}
