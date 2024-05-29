import React from 'react'
import './styles.css'

const Image = ({src, isRounded}) => {
  return (
    <img src={src} className={`img ${isRounded && 'rounded'}`} />
  )
}

export default Image
