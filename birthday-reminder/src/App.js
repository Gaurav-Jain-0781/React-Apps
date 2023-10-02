import React, { useState } from "react";
import { data } from "./Data";
import List from "./List";
import './index.css'

function App() {
  const [people, setPeople] = useState(data);

  return (
    <section id='birthday'>
      <h1>{people.length} Birthdays today</h1>
      {people.map((person) => {
        return <List key={person.id} {...person}></List>
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  );
}

export default App;
