import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo new.png" alt='' width={130} />
                <span className='ftext'>
                Discover your dream home with just a click <br/>
                Your key to exceptional real estate experiences
                </span>
            </div>

          <div className="flexCenter flexColStart f-center">
            <h2>Subscribe to our Newsletter</h2>
            <form className='newsletter'>
            <input className="email" type="email" placeholder="Enter your email address"></input>
            </form>
            <button>Subscribe</button>
            
          </div>

            

            <div className="flexColStart f-right">
                <span className="f1-text">Information</span>
                <span className="f-text">Kolkata,India</span>


                <div className="flexCenter f-menu">
                <span>Properties</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
            </div>

          
        </div>
    </section>
  )
}

export default Footer