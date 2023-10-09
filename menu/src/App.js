import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data.js";

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState([]); 
 
  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h4>Our Menu</h4>
          <div className="underline"></div>
        </div>        
        <Categories/>
        <Menu items={menuItem}/>
      </section>
    </main>
  ) 
}

export default App;
