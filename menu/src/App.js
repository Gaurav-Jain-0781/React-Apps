import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data.js";

const allcategories = ["all", ...new Set(items.map((item) => { return item.category }))]

console.log(allcategories)

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allcategories); 

  const filterItem = ({category}) => {
    if(category === 'all')
      setMenuItem(items);
    else{
      const categoryItem = items.filter((item) => 
      item.category === category
      )
      setMenuItem(categoryItem);
    }
  }
 
  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h4>Our Menu</h4>
          <div className="underline"></div>
        </div>        
        <Categories categories={categories} filterItem={filterItem}/>
        <Menu items={menuItem}/>
      </section>
    </main>
  ) 
}

export default App;
