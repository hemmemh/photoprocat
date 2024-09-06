import React from 'react'
import BodyAdmin from './bodyAdmin/BodyAdmin'
import { ModalAdmin } from './modalAdmin/ModalAdmin'


export  const MainAdmin = () => {
  return (
    <div className="Admin">
        <BodyAdmin/>
        <ModalAdmin/>
    </div>
  )
}


