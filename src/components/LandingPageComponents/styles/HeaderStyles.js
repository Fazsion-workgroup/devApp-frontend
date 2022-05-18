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
