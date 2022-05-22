import React from 'react';
import { FooterLinks, FooterSection } from './styles/FooterStyles';

const Footer = () => {
    return (
        <FooterSection>
            <FooterLinks>
                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Help</p>
                    <p>Partnership</p>
                    <p>Press</p>
                </div>
                <div>
                    <h4>Product</h4>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </FooterLinks>

            <div className="foot-note">
                <p>
                    Tajiri Shopping Ltd., doing business as Tajiri. Tajiri does not have, nor does
                    it purport to have, ownership of third-party trademarks. Third-party trademarks
                    that are visible, or accessible directly or indirectly, via the Tajiri platform,
                    do not necessarily have a relationship with Tajiri or third-parties associated
                    with Karma or service providers of Tajiri.
                </p>
                <p>
                    We use cookies to improve our site and your shopping experience. By continuing
                    to browse our site you accept our cookie policy. More info
                </p>
                <p>
                    We may earn a commission when you use one of our coupons/links to make a
                    purchase.
                </p>
            </div>
        </FooterSection>
    );
};

export default Footer;
