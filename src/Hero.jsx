import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Pok pok banjo ascot 90's beard, prism sriracha everyday carry 
                    bushwick sunt organic. Swag single-origin coffee normcore venmo taxidermy
                     actually vibecession hashtag live-edge nulla photo booth austin pork belly coloring
                      book mlkshk. Sunt ut affogato, asymmetrical occaecat sus 
                    activated charcoal ennui. Sus squid four loko pabst deep v tonx ut
                     heirloom DIY 
                    try-hard cred ea succulents glossier.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero