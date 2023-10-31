import React from 'react'
import { social, links } from './Data'
import { FaTimes } from 'react-icons/fa'
import logo from './logo.jpg'

const SideBar = () => {
  return (
    <aside className={`sidebar`}>
        <div className='sidebar-header'>
            <img src={logo} className='logo' alt='Codding Addict'/>
            <button className='close-btn'>
                <FaTimes/>
            </button>
        </div>
        <ul className='links'>
            {links.map((link) => {
                return <li key={link.id}>
                    <a href={link.url}> 
                        {link.icon}
                        {link.text}
                    </a>
                </li>
            })}
        </ul>
        <ul className='social-icons'>
            {social.map((item) => {
                return <li key={item.id}>
                    <a href={item.url}>{item.icon}</a>
                </li>
            })}
        </ul>
    </aside>
  )
}

export default SideBar
