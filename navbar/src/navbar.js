import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.jpg'
import { FaBars } from 'react-icons/fa'
import { links, socials } from './data.js'

const Navbar = () => {
    const [showLinks, setshowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(()=> {
        const linkheight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linkheight}px`
        }
        else{
            linksContainerRef.current.style.height = '0px'
        }
        console.log(linkheight)
    }, [showLinks])

  return <nav>
      <div className='nav-center'>
        <div className='nav-header'>
            <img className='logo' src={logo} alt='Logo'></img>
            <button className='nav-toggle' onClick={() => setshowLinks(!showLinks)}>
                <FaBars/>
            </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
                {links.map((link) => {
                    return <li key={link.id}><a href={link.url}> {link.text} </a></li>
                })}
            </ul>
        </div>

        <ul className='social-icons'>
            {socials.map((socail) => {
                return <li key={socail.id}><a href={socail.url}> {socail.icon} </a></li>
            })}
        </ul>
      </div>
    </nav>
}

export default Navbar
