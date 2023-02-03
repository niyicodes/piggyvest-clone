import React, { useState } from 'react'
import './Navbar.css'
import {Menu, X} from "../Icons/icon"
import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import Dropdown from "../Dropdown/Dropdown"

function Navbar() {
   const [click, setClick] = useState(false)
   const [dropdown, setDropdown] = useState(false)

   // hamburger menu
   const handleClick = () => setClick(!click);
   // close hamburger on click of the List item
   const closeMobileMenu = () => setClick(false);

   const onMouseEnter = () => {
      if(window.innerWidth < 960){
         setDropdown(false);
      } else {
         setDropdown(!false)
      }
   }

   const onMouseLeave = () => {
      if(window.innerWidth < 960){
         setDropdown(false);
      } else {
         setDropdown(false)
      }
   }

   
  return (
    <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to='/' className="navbar-logo">
               <img src="/logo.svg" alt="" /> 
            </Link>
            <div className="menu-icon" onClick={handleClick}>
               {click ? <X /> : <Menu />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
               <li className="nav-item"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
               >
                  <Link to='' className='nav-links' onClick={closeMobileMenu}>Save</Link>
                  {dropdown && <Dropdown />}
               </li>
               <li className="nav-item">
                  <Link to='/invest' className='nav-links' onClick={closeMobileMenu}>Invest</Link>
               </li>
               <li className="nav-item">
                  <Link to='/stories' className='nav-links' onClick={closeMobileMenu}>Stories</Link>
               </li>
               <li className="nav-item">
                  <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>FAQs</Link>
               </li>
               <li className="nav-item">
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>Blog</Link>
               </li>
               <li className="nav-item">
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>E-book</Link>
               </li>
               <div className="btns">
               <li className="nav-item">
                  <Link to='/login' className='nav-links btn white' onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">Sign in</Link>
               </li>
               <li className="nav-item">
                  <Link to='/register' className='nav-links btn black' target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Create free account</Link>
               </li>
               </div>
            </ul>
         </div>
      </nav>
    </>
  )
}

export default Navbar