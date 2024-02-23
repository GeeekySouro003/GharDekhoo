import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="org-circle"/>
                     <h1>
                        Unlock<br/>
                        Your <br/> Dream Property
                     </h1>
                </div>

                <div className="flexColStart hero-descr">
                    <span className="secondaryText">
                    Find a variety of properties that suit you very easily
                    </span>
                    <span className="secondaryText">
                    Forget all difficulties in finding a residence for you
                    </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={32}/>
                    <input type="text"/>
                    <button className="btn">
                        Search</button>         
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8700} end={9000} duration={4} />
                                <span>+</span>
                                </span>
                                <span>Premium Properties</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1900} end={2000} duration={4} />
                                <span>+</span>
                                </span>
                                <span>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={30} />
                                <span>+</span>
                                </span>
                                <span>Award Winnings</span>
                        </div>
                    </div>

            </div>
            
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./house-main.avif" alt="Hero Image" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Hero