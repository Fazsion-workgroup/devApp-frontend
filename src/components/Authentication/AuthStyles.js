import styled from 'styled-components';

export const LoginSection = styled.section`
    padding: 1rem;
    .login-note {
        color: rgba(0, 0, 0, 0.2);
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        a {
            color: #3875ea;
            text-decoration: none;
        }
    }
`;

export const RegisterSection = styled.section`
    padding: 1rem;
    .title {
        text-align: center;
        margin-top: 2rem;
        h3 {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #0a083b;
            font-family: 'Neurial-LightBold', sans-serif;
        }
        h6 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            color: #0a083b;
        }
    }
    .login-note {
        color: rgba(0, 0, 0, 0.2);
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        a {
            color: #3875ea;
            text-decoration: none;
        }
    }
`;

export const Forms = styled.form`
    @media (max-width: 500px) {
        margin: auto;
        padding: 3rem 1rem;
        .form-group {
            margin-bottom: 1.7rem;
            width: 100%;
            label {
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
            }
            input {
                background: #ffffff;
                border: 0.4px solid rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                height: 53px;
                font-size: 14px;

                width: 100%;
                margin-top: 0.5rem;
                padding: 0 0 0 1rem;
                margin-bottom: 0.3rem;
                :focus {
                    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
                    outline: none;
                }
                ::placeholder {
                    opacity: 0.2;
                }
            }
            select {
                background: #ffffff;
                border: 0.4px solid rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                height: 53px;
                width: 100%;
                margin-top: 0.5rem;
                margin-bottom: 0.3rem;
                color: #0a083b;
                font-size: 14px;
                option {
                    padding-left: 2rem;
                }
                :focus {
                    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
                    outline: none;
                }
                ::placeholder {
                    opacity: 0.2;
                }
            }
            .error-message {
                color: red;
                font-size: 12px;
                margin-left: 1rem;
                padding-top: 0.8rem;
            }
        }
        > button {
            padding: 15px 10px;
            height: 50px;
            left: 34px;
            top: 335px;
            width: 100%;
            background: #2121f1;
            border-radius: 10px;
            border: none;
            color: #ffffff;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
        }
        .socials-auth {
            margin-top: 2rem;
            display: flex;
            width: 100%;
            gap: 25px;
            justify-content: center;
            button {
                border: 0.3px solid #0000004d;
                border-radius: 5px;
                width: 86px;
                height: 53px;
                background-color: #ffffff;
            }
        }
    }
`;
