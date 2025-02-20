import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt, faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './style.css'; 

const Counters = () => {
    return (
        <>
            <div className="counters">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="media counter-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faAward} size="1x" className="icon-color" />
                                </div>
                                <div className="media-body align-self-center">
                                    <h2 className="counter">
                                        <CountUp end={967} className='font-colorz' duration={5} />
                                    </h2>
                                    <p>Awards Winning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="media counter-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCalendarAlt} size="1x" className="icon-color" />
                                </div>
                                <div className="media-body align-self-center">
                                    <h2 className="counter">
                                        <CountUp end={24} className='font-colorz' duration={5} />
                                    </h2>
                                    <p>Done Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="media counter-box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUser} size="1x" className="icon-color" />
                                </div>
                                <div className="media-body align-self-center">
                                    <h2 className="counter">
                                        <CountUp end={120} className='font-colorz' duration={5} />
                                    </h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counters;
