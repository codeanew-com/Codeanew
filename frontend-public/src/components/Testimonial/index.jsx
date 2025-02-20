

import React from 'react';
import Avatar1 from "../../assets/img/avatar/avatar-1.jpg";
import Avatar2 from "../../assets/img/avatar/avatar-2.jpg";
import Avatar3 from "../../assets/img/avatar/avatar-3.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <div className="testimonial-inner">
                            <header className="testimonia-header">
                                <h1>Testimonial</h1>
                            </header>
                            <Carousel id="carouselExampleIndicators3" controls={true} indicators={true} interval={5000}>
                                <Carousel.Item>
                                    <div className="testimonial-info">
                                        <div className="sz">
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.
                                            </p>
                                        </div>
                                        <div className="media mb-4">
                                            <a className="pr-3" href="#">
                                                <img src={Avatar1} alt="team-3" className="img-fluid" />
                                            </a>
                                            <div className="media-body align-self-center">
                                                <h5>
                                                    <a href="#">Anne Brady</a>
                                                </h5>
                                                <h6>Restaurant Owner</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="testimonial-info">
                                        <div className="sz">
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.
                                            </p>
                                        </div>
                                        <div className="media mb-4">
                                            <a className="pr-3" href="#">
                                                <img src={Avatar2} alt="team-3" className="img-fluid" />
                                            </a>
                                            <div className="media-body align-self-center">
                                                <h5>
                                                    <a href="#">Antony Moore</a>
                                                </h5>
                                                <h6>Restaurant Owner</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="testimonial-info">
                                        <div className="sz">
                                            <p className="lead">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae.
                                            </p>
                                        </div>
                                        <div className="media mb-4">
                                            <a className="pr-3" href="#">
                                                <img src={Avatar3} alt="team-3" className="img-fluid" />
                                            </a>
                                            <div className="media-body align-self-center">
                                                <h5>
                                                    <a href="#">Emma Connor</a>
                                                </h5>
                                                <h6>Restaurant Owner</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
