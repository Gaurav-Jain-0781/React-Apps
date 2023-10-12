import React, { useEffect, useState } from 'react'
import {FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    if(index < 0){
      setIndex(people.length - 1);
    }
    if(index > 3){
      setIndex(0);
    }
  }, [index, people])

  useEffect(()=> {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000);

    return () => {clearInterval(slider)}
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span> Reviews </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex)=> {

          let position = 'nextSlide';
          if(personIndex === index){
            position = 'activeSlide'
          }
          if(personIndex === index-1 || (index === 0 && personIndex === people.length - 1)){
            position = 'lastSlide'
          }

          return <article  className={position} key={personIndex}>
            <img src={person.image} alt={person.name} className='person-img'></img>
            <h4>{person.name}</h4>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        })}
        <button className='prev' onClick={()=> setIndex(index - 1)}><FiChevronLeft/></button>
        <button className='next' onClick={() => setIndex(index + 1)}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App
