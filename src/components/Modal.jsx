import React, { useState } from 'react'
import { Carrito } from './Carrito'

export const Modal = ({isOpen, onClose, cart, buy}) => {

    if(!isOpen) return null

    
  return (
    <div className='modal'>
        <div className="modal-context">
            <button className="close-button" onClick={onClose}>X</button>
            <Carrito cart={cart} buy = {buy}></Carrito>
        </div>
    </div>
  )
}
