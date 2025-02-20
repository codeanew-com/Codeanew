import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Counters = () => {
    return (
        <div className="counters">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="media counter-box align-items-start ">
                            <div className="icon mr-3 icon-logo">
                                <FontAwesomeIcon icon={faAward} size="1x" className="icon-color icon-logo" />
                            </div>
                            <div className="media-body">
                                <h2 className="counter">
                                    <CountUp end={967} className='font-colorz' duration={5} />
                                </h2>
                                <p>Awards Winning</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="media counter-box align-items-start">
                            <div className="icon mr-3 icon-logo">
                                <FontAwesomeIcon icon={faCalendarAlt} size="1x" className="icon-color icon-logo" />
                            </div>
                            <div className="media-body">
                                <h2 className="counter">
                                    <CountUp end={24} className='font-colorz' duration={5} />
                                </h2>
                                <p>Done Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div className="media counter-box align-items-start">
                            <div className="icon mr-3 icon-logo">
                                <FontAwesomeIcon icon={faUser} size="1x" className="icon-color icon-logo" />
                            </div>
                            <div className="media-body">
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
    );
}

export default Counters;
