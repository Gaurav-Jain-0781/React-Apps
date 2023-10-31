import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  return (
    <div className={`modal-overlay`}>
        <div className='modal-container'>
            <h3>Modla Content</h3>
            <button className='close-modla-btn'>
                <FaTimes/>
            </button>
        </div>
    </div>
  )
}

export default Modal
