import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    padding: 0 4rem;

    @media (max-width: 500px) {
        padding: 0 1.5rem 0 0.5rem;
    }
    .logo {
        @media (min-width: 992px) {
            width: 10%;
        }
    }
    .menuSection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        @media (max-width: 500px) {
            gap: 1rem;
        }
        button {
            background: #2121f1;
            border: none;
            background: #2121f1;
            border-radius: 20px;
            color: white;
            font-style: normal;
            font-weight: 700;
            padding: 10px 24px;
            @media (max-width: 500px) {
                font-size: 10px;
                line-height: 20px;
                padding: 4px 10px;
                border-radius: 10px;
            }
        }
    }
`;
export const HamburgerMenu = styled.div`
    cursor: pointer;
`;

export const HeroSection = styled.section`
    display: flex;
    margin: auto;
    padding: 4rem;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 90%;
    .hero-text {
        width: 55%;
        h1 {
            font-style: normal;
            color: #232938;
            margin-bottom: 1rem;
            font-family: 'Neurial-Bold', sans-serif;

            span {
                color: #2121f1;
                font-family: 'Neurial-Bold', sans-serif;
            }
        }
        p {
            font-weight: 300;
            color: #050038;
            margin-bottom: 1.5rem;
        }
        button {
            background: #2121f1;
            border-radius: 10px;
            border: none;
            color: white;
            font-weight: 700;
            min-width: 100px;
            padding: 10px;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 2rem;
        .hero-text {
            margin-bottom: 2rem;
            width: 100%;
            h1 {
                font-size: 33px;
                line-height: 40px;
                letter-spacing: -0.04em;
            }
            p {
                font-size: 15px;
                line-height: 20px;
            }
            button {
                padding: 10px;
                font-size: 10px;
            }
        }
    }
`;
