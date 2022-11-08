import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";

const Navbar = () => {
  return (
    <>
     <nav>
        <Link to="/" className='links'>AboutMe</Link>
        <Link to="/Home" className='links' >Home</Link>
        <Link to="/Contect Me" className='links' >ContectMe</Link>
        <Link to="/my Projects" className='links' >myProjects</Link>
     </nav> 
    </>
  )
}

export default Navbar

