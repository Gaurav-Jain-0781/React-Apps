import React from 'react'

const List = (props) => {
  return (
    <div className='person'>
      <div className='person-image'>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className='person-detail'>
        <h2>{props.name}</h2>
        <p>{props.age} years</p>
      </div>
    </div>
  )
}

export default List
