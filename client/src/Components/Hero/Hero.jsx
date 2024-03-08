import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import {motion} from 'framer-motion';
import SearchBar from '../SearchBar/SearchBar.jsx';
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="org-circle"/>
                     <motion.h1
                     initial={{y:"2.5rem",opacity:0}}
                     animate={{y:0,opacity:1}}
                     transition={{
                        duration:2.8,
                        type:"spring"
                     }}
                     >
                        Unlock<br/>
                        Your <br/> Dream Property
                     </motion.h1>
                </div>

                <div className="flexColStart hero-descr">
                    <span className="secondaryText">
                    Find a variety of properties that suit you very easily
                    </span>
                    <span className="secondaryText">
                    Forget all difficulties in finding a residence for you
                    </span>
                </div>

                <SearchBar/>
                
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
                <motion.div 
                initial={{x:"10rem",opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{
                    duration:6,
                    type:"spring"
                }}
                className="image-container">
                    <img src="./house-main.avif" alt="Hero Image" />
                </motion.div>
            </div>

        </div>
    </section>
  )
}

export default Hero