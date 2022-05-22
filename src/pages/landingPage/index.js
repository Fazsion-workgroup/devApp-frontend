import React from 'react';
import Footer from '../../components/LandingPageComponents/Footer';
import Header from '../../components/LandingPageComponents/Header';
import Hero from '../../components/LandingPageComponents/Hero';
import Mission from '../../components/LandingPageComponents/Mission';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Mission />
            <Footer />
        </div>
    );
};

export default LandingPage;
