import styled from 'styled-components';

export const FooterSection = styled.section`
    padding: 2rem;
    .foot-note {
        margin-top: 2rem;
        margin-bottom: 4rem;
        text-align: center;
        p {
            color: #333333;
            opacity: 0.5;
            font-weight: 300;
            font-size: 10px;
            line-height: 15px;
            margin-bottom: 1rem;
        }
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    > div {
        h4 {
            color: #2450a8;
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            margin-bottom: 1rem;
        }
        p {
            color: #333333;
            font-weight: 300;
            font-size: 15px;
            line-height: 30px;
            opacity: 0.5;
        }
    }
`;
