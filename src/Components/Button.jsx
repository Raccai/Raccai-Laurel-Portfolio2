import React from 'react'
import "./Button.css"
import linkPointerLight from "../assets/linkPointerLight.svg"
import linkPointer from "../assets/linkPointer.svg"

export const Button = ({ currentProject, func, text }) => {
  return (
    <>
      {currentProject ? (
        <span
          className={`button-component ${currentProject.span}`} 
          tabIndex="0" 
          onClick={() => { window.open(currentProject.mainLink) }}
          onKeyDown={(event) => {
            if (event.key === "Enter") window.open(currentProject.mainLink);
          }}
        >
          <img src={linkPointerLight} alt="pointer svg white" />
          {currentProject.name === "About Me" ? "Résumé" : currentProject.span}
        </span>
      ):(
        <div className="goBackBtn close-button">
          <div 
            onClick={func}
            tabIndex="0" 
            onKeyDown={(event) => {if (event.key === 'Enter') func}}
          >
            <span><img src={linkPointer} alt="pointer svg" /></span> 
            {text}
          </div>
        </div>
      )}    
    </>
  )
}
