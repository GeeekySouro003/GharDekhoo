import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  const[menuOpen,setmenuOpen]=useState(false)

  const getmenuStyles =(menuOpen) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpen && "-100%"} 
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">

        <img src="./logo new.png" alt="Logo" width={100} />
        </Link>
     
        <OutsideClickHandler
        
        onOutsideClick={() =>
        {
          setmenuOpen(false);
        }}
        
        >
        <div className=" flexCenter h-menu"
        
        style={getmenuStyles(menuOpen)}
        >


          <NavLink to="/properties">Properties</NavLink>
         
        
          <a href="mailto:dgsouro77@gmail.com">Contact</a>
          <button className="button">
            Log In
          </button>
          
          
        </div>
        </OutsideClickHandler>
        
        <div className="menu-icon" onClick={()=> setmenuOpen((prev)=>!prev)}>
      <GiHamburgerMenu  size={30}/>
      </div>
      </div>



     
    </section>

  )
}

export default Header