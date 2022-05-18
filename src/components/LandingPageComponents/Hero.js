import React from 'react';
import { HeroSection } from './styles/HeaderStyles';
import hero from '../../assets/hero-img.svg';
const Hero = () => {
    return (
        <HeroSection>
            <div className="hero-text">
                <h1>
                    Discover top <span>dropshipping suppliers</span> of original products
                </h1>
                <p>
                    Below is a short checklist we recommend finishing to make your store a success.{' '}
                </p>
                <button>Join Tajiri Now</button>
            </div>
            <div className="hero-img">
                <img src={hero} alt="hero-img" />
            </div>
        </HeroSection>
    );
};

export default Hero;
