import React from 'react';
import { HeroSection, MoreInfoSection } from './styles/HeaderStyles';
import hero from '../../assets/hero-img.svg';
import info from '../../assets/info-img.svg';
import float from '../../assets/floating-img.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <HeroSection>
                <div className="hero-text">
                    <h1>
                        Discover top <span>dropshipping suppliers</span> of original products
                    </h1>
                    <p>
                        Below is a short checklist we recommend finishing to make your store a
                        success.{' '}
                    </p>
                    <Link to="/register">
                        <button>Join Tajiri Now</button>
                    </Link>
                </div>
                <div className="hero-img">
                    <img src={hero} alt="hero-img" />
                </div>
            </HeroSection>

            <MoreInfoSection>
                <div className="info-text">
                    <h2>Join over 3 million shoppers</h2>
                    <p>
                        Tajiri provides you with great technology and flexibility to shop smarter,
                        helping you avoid those unnecessary impulse buys, all while saving you time
                        and money.
                    </p>
                </div>
                <div className="info-img">
                    <img src={info} alt="info-img" />
                </div>
                <div className="floating-img">
                    <img src={float} alt="floating-img" />
                </div>
            </MoreInfoSection>
        </>
    );
};

export default Hero;
