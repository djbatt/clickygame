import React from 'react'

export default (props) => {
  return (
    <div
    className='card'
    value={props.id}
    onClick={() => props.handleUserInput(props.id)}
    >
      <div className='card-image'>
        <img src={props.image} alt='props.name'/>
      </div>
    </div>
  )
}
