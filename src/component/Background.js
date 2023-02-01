import React from 'react'
import video from '../assets/giphy.gif'

const Background = () => {
  return (
    <img className="fixed top-0 left-0 w-full h-full object-cover brightness-50" src={video} alt="bg" autoPlay loop/>
  )
}

export default Background