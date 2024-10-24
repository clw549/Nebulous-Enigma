import React from 'react'

function Choice({ handleClick, text }) {

  return (
    <button onClick={ handleClick } className='btn btn-default border w-100 bg-light rounded-0'>
      { text }
    </button>
  )
}

export default Choice;
