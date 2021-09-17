import React from 'react'
import './Button.css'

export default function Button(props) {
  const buttonStyle = `btn ${props.size} ${props.colour}`

  return (
    <button className={buttonStyle}>
      {props.text}
    </button>
  )
}

