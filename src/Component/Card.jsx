import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='backgroundcolor' style={{background:props.colorcode}}>

      </div>
      <div className='colorinfo'>
        <h3>{props.colorcode}</h3>
        <div style={{color:props.colorcode}}>{props.name}</div>

      </div>
    </div>
  )
}

export default Card
