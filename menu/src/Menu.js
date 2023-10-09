import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
        {items.map((i) => {
            return <article key={i.id} className="menu-item">
                <img src={i.img} alt={i.title} className="photo"/>
                <div className='item-info'>
                    <header>
                        <h4>{i.title}</h4>
                        <h4 classname="price">${i.price}</h4>
                    </header>
                    <p className='item-text'>{i.desc}</p>
                </div>
            </article>
        })}
    </div>
  )
}

export default Menu
