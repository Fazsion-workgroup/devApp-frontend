import React from 'react';
import { HeaderContainer, HamburgerMenu } from './styles/HeaderStyles';
import logo from '../../assets/fullLogo.svg';
import menu from '../../assets/menu.svg';
const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" className="logo" />
            <div className="menuSection">
                <button>Login</button>
                <HamburgerMenu>
                    <img src={menu} alt="hamburger-menu" />
                </HamburgerMenu>
            </div>
        </HeaderContainer>
    );
};

export default Header;
