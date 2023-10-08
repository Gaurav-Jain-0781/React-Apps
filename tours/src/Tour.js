import React, { useState } from 'react'

const Tour = ({id, name, price, image, info, rmvtour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h3>{name}</h3>
                <h3 className='tour-price'>${price}</h3>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)} id='toggle'>
                    {readMore ? 'Show Less' : 'Show More'}
                </button>
            </p>
        </footer>
        <button className='delete-btn' onClick={()=> rmvtour(id)}>Not Interested</button>
    </div>
  )
}

export default Tour
