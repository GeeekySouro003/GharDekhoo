import React from 'react'
import './PropertyCard.css';
import { BsFillHeartFill } from "react-icons/bs";

const PropertyCard = ({card} ) => {
  return (
    <div className="flexColCenter p-card">
      <BsFillHeartFill  size={22} color="white"/>
    <img src={card.image} alt='home' />
    <span className="secondaryText p-price">
      <span style={{ color: "orange" }}>₹</span>
      <span>{card.price}</span>
    </span>

    <span className='primaryText'>{card.name}</span>
    <span className='secondaryText'>{card.detail}</span>
  </div>
  )
}

export default PropertyCard