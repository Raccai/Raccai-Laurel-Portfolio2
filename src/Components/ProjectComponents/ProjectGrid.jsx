import React from 'react'
import { techLinks } from '../../data/techLinks';
import "./ProjectGrid.css"
import { Button } from '../Button';

export const ProjectGrid = ({ currentProject }) => {
  return (
    <div className="project-details-grid">
      
      <div className="project-details-grid-item">
        <h3>{currentProject.subtitle}</h3>
        <div className="tags">

          <Button currentProject={currentProject} />

          {currentProject.techs.map((tech, index) => (
            <a key={index} className="tech" href={techLinks[tech]} target="_blank" rel="noopener noreferrer">{tech}</a>
          ))}
          
        </div>
      </div>

      <div className="project-details-grid-item">
        <p>{currentProject.details.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== currentProject.details.length - 1 && <br />}
            {index !== currentProject.details.length - 1 && <br />}
          </React.Fragment>
        ))}</p>
      </div>

    </div>
  )
}
