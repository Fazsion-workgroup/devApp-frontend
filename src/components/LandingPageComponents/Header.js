import React from 'react';
import { HeaderContainer, HamburgerMenu } from './styles/HeaderStyles';
import logo from '../../assets/fullLogo.svg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <div className="menuSection">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <HamburgerMenu>
                    <img src={menu} alt="hamburger-menu" />
                </HamburgerMenu>
            </div>
        </HeaderContainer>
    );
};

export default Header;
