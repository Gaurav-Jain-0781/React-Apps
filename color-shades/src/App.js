import React, { useState } from "react";
import SingleColor from "./Single-Color";

import Values from "values.js";

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#3aafa9').all(10))

  const handelSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10)
      setList(colors)
    } catch(error){
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handelSubmit}>
          <input className={(error) ? 'error' : null} type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#3AAFA9'/>
          <button className="btn" type="submit">Generate Color</button>
        </form>
      </section> 
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} hexColor={color.hex} {...color}/>
        })}
      </section>
    </>
  );
}

export default App;
