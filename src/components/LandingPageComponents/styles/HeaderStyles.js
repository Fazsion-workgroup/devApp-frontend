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
    /* widtqh: 90%; */
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

export const MoreInfoSection = styled.section`
    display: flex;
    position: relative;
    padding: 4rem;
    align-items: center;
    justify-content: center;
    /* width: 90%; */
    gap: 2rem;
    .info-text {
        width: 55%;
        h2 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #2121f1;
            font-family: 'Neurial-LightBold', sans-serif;
        }
        p {
            font-weight: 300;
            color: #050038;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0rem 2rem;
        .info-text {
            margin-bottom: 2rem;
            width: 100%;
            h2 {
                font-size: 32px;
                line-height: 35px;
                letter-spacing: -0.04em;
            }

            p {
                font-size: 15px;
                line-height: 20px;
            }
        }
        .floating-img {
            position: absolute;
            top: 10px;
            right: 20%;
        }
    }
`;

export const MissionSection = styled.section`
    display: flex;
    padding: 4rem;
    align-items: center;
    justify-content: center;
    background-color: #bfedfd;
    overflow: hidden;
    margin-top: 2rem;
    .mission-text {
        h5 {
            font-style: normal;
            font-weight: 300;
            color: #050038;
            margin-bottom: 1rem;
        }
        h2 {
            font-style: normal;
            /* font-weight: 700; */
            letter-spacing: -0.04em;
            color: #2121f1;
            font-family: 'Neurial-LightBold', sans-serif;
            margin-bottom: 2rem;
        }
    }
    .mission-img {
        > img {
            width: 115%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 2rem 0;
        .mission-text {
            h5 {
                font-size: 15px;
                line-height: 20px;
            }
            h2 {
                font-size: 32px;
                line-height: 35px;
            }
        }
    }
`;

export const WaysSection = styled.section`
    .ways-text {
        h2 {
            font-weight: 700;
            font-family: 'Neurial-LightBold', sans-serif;
            letter-spacing: -0.04em;
            color: #2121f1;
            margin-bottom: 2rem;
        }
        p {
            font-style: normal;
            font-weight: 300;
            color: #050038;
        }
    }
    @media (max-width: 500px) {
        padding: 3rem 2rem;
        .ways-text {
            h2 {
                font-size: 32px;
                line-height: 35px;
            }
            p {
                font-size: 15px;
                line-height: 20px;
            }
        }
    }
`;

export const ExtraSection = styled.section`
    background: #2121f1;
    color: white;
    position: relative;
    h1 {
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.04em;
        /* margin-bottom: 3.5rem; */
    }
    .extra-text {
        margin: 5rem 0 0;
    }
    .dollar {
        position: absolute;
        top: -5%;
        right: 5%;
    }
    @media (max-width: 500px) {
        padding: 3rem 2rem;

        h1 {
            font-size: 32px;
            line-height: 35px;
        }
        .extra-text {
            h6 {
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 20px;
                margin-bottom: 1rem;
            }
            p {
                font-weight: 300;
                font-size: 15px;
                line-height: 20px;
                color: #ffffff;
                opacity: 0.7;
            }
        }
    }
`;

export const TotalSavings = styled.section`
    background-color: #2450a8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    @media (max-width: 500px) {
        height: 150px;
        h4 {
            font-size: 22px;
            background-color: #4e82d388;
            padding: 0.2rem;
            font-family: 'Neurial-LightBold', sans-serif;
        }
        .savings {
            margin-top: 1rem;
            font-size: 0.6rem;
            display: flex;
            align-items: baseline;
            gap: 0.3rem;
            font-weight: 700;
            span {
                background-color: #4e82d388;
                padding: 0.5rem 0.3rem;
                border-radius: 2px;
            }
            i {
                vertical-align: baseline;
            }
        }
    }
`;
