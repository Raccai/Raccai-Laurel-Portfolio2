import React from 'react'
import "./ImageModal.css"
import linkPointer from "../../assets/linkPointer.svg"
import { Button } from '../Button'

export const ImageModal = ({ closeModal, modalImageUrl }) => {
  return (
    <div className="modal-content">
      <Button func={closeModal} text={"Close"} />
      <div className="modal-img">
        <img src={modalImageUrl} alt="Image modal" />
      </div>
    </div>
  )
}
