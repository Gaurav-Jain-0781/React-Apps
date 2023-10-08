import React, { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([])

  const removetour = (id) => {
    const newTours =  tours.filter((tour) => {
        return tour.id !== id
    })
    setTours(newTours)
  }
  
  const fetchData = async() => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false)
    setTours(data)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  if(loading){
    return <main>
      <Loading/>
    </main>
  }

  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchData}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} rmvtour={removetour}/>
    </main>
  )
}

export default App
