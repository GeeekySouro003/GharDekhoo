import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from 'react-outside-click-handler';
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
        <img src="./logo new.png" alt="Logo" width={100} />
        <OutsideClickHandler
        
        onOutsideClick={() =>
        {
          setmenuOpen(false);
        }}
        
        >
        <div className=" flexCenter h-menu"
        
        style={getmenuStyles(menuOpen)}
        >

          
          <a href="">Properties</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
          <a href="">Contact</a>
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