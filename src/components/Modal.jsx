import React from 'react'
import { Carrito } from './Carrito'

export const Modal = ({isOpen, onClose, cart}) => {

    if(!isOpen) return null

    

  return (
    <div className='modal'>
        <div className="modal-context">
            <button className="close-button" onClick={onClose}>X</button>
            <Carrito cart={cart}></Carrito>
        </div>
    </div>
  )
}
