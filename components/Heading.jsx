import React from 'react'

const Heading = ({ number, heading }) => {
  return (
    <div className='flex pitem'>
      <em>{number}</em>
      <h2>{heading}</h2>
    </div>
  )
}

export default Heading
