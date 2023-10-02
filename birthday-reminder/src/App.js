import React from "react";
import { data } from "./Data";
import List from "./List";
import './index.css'

function App() {
  return (
    <section id='birthday'>
      <h1>{data.length} Birthdays today</h1>
      {data.map((person) => {
        return <List key={person.id} {...person}></List>
      })}
      <button onClick={console.log('UseState')}>Clear All</button>
    </section>
  );
}

export default App;
