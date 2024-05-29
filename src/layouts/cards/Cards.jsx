import React from 'react'
import './styles.css'

const Cards = ({children}) => {
  return (
    <div className='cards'>
      {children}
    </div>
  )
}

export default Cards
