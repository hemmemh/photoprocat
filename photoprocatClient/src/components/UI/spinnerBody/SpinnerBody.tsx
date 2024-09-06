import React from 'react'
import Spinner from '../spinner/Spinner'
import './spinnerBody.scss'

const SpinnerBody = ({className=''}:{className?:string}) => {
  return (
    <div className={`SpinnerBody ${className}`}>
        <Spinner size={130}/>
    </div>
    
  )
}

export default SpinnerBody