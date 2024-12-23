import React from 'react'
import './Hero.css'
import low_price from '../Assets/low-price.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Only at OmarShop</h2>
        <div>
            <div>
                <div className="low_price">
                    <p>Low</p>
                    <img src={low_price} alt="" />
                </div>
                <p>Prices</p>
                <p>Everyday</p>
            </div>
            <div className="hero-latest-btn">
            <img src={arrow_icon} alt="" />   

                <div>Selling Fast</div>   
                <img src={arrow_icon} alt="" />   
            </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
