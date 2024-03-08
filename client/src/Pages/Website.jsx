import React from 'react'
import Companies from "../Components/Companies/Companies.jsx";
import Properties from "../Components/Properties/Properties.jsx";
import Values from "../Components/Values/Values.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import GetStarted from "../Components/GetStarted/GetStarted.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";
import Hero from "../Components/Hero/Hero.jsx";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      
      <Hero/> 
      </div>
      <Companies/>
       <Properties/>
       <Values/>
      <Contact/>
      <GetStarted/>
        
    </div>
  )
}

export default Website