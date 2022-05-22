import React from 'react';
import { ExtraSection, MissionSection, TotalSavings, WaysSection } from './styles/HeaderStyles';
import missionImg from '../../assets/mission.png';
import dollar from '../../assets/dollar.svg';
const Mission = () => {
    return (
        <>
            <MissionSection>
                <div className="mission-text">
                    <h5>Our Mission</h5>
                    <h2>
                        Empower you to make the right choices at the right time when you shop
                        online.
                    </h2>
                </div>
                <div className="mission-img">
                    <img src={missionImg} alt="mission-img" />
                </div>
            </MissionSection>
            <WaysSection>
                <div className="ways-text">
                    <h2>Ways to use Tajiri</h2>
                    <p>
                        You can use Tajiri in many ways like making sure you get the best price at
                        the right time along with planning your next purchases. Here are a few
                        examples that we recommend:
                    </p>
                </div>
            </WaysSection>
            <ExtraSection>
                <h1>We're serious about your enterpreneurship journey...</h1>

                <div className="extra-text">
                    <h6>Tajiri is secure</h6>
                    <p>
                        We use bank-level security (256-bit encryption) to make sure your
                        information is safe and secure.
                    </p>
                </div>

                <div className="extra-text">
                    <h6>Tajiri is secure</h6>
                    <p>
                        We use bank-level security (256-bit encryption) to make sure your
                        information is safe and secure.
                    </p>
                </div>
                <div className="dollar">
                    <img src={dollar} alt="dollar" />
                </div>
            </ExtraSection>

            <TotalSavings>
                <h4>Total Savings</h4>
                <div className="savings">
                    $ <span>2</span> <span>2</span> <span>2</span> <i>,</i> <span>2</span>{' '}
                    <span>2</span> <span>2</span> <i>,</i> <span>2</span> <span>2</span>{' '}
                    <span>2</span>
                </div>
            </TotalSavings>
        </>
    );
};

export default Mission;
