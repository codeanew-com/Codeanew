import React from 'react'

const Pricing = () => {
    return (
        <>
            <div className="pricing-tables content-area bg-grea" id="pricing">
                <div className="container">
                    
                    <div className="main-title text-center">
                        <h1>Pricing Tables</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="pricing">
                                <div className="title">Basic Plan</div>
                                <div className="content">
                                    <ul>
                                        <li>20 Projects</li>
                                        <li>32GB Storage</li>
                                        <li>50 Email Accounts</li>
                                        <li>12GB Bandwidth</li>
                                        <li>32GB Storage</li>
                                    </ul>
                                </div>
                                <div className="price-for-user">
                                    <div className="price"><sup>$</sup><span className="dolar">54</span><small className="month">Per month</small></div>
                                </div>
                                <div className="button"><a href="#" className="btn btn-outline pricing-btn">Select Plan</a></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="pricing popular">
                                <div className="title">Advanced Plan</div>
                                <div className="content">
                                    <ul>
                                        <li>20 Projects</li>
                                        <li>32GB Storage</li>
                                        <li>50 Email Accounts</li>
                                        <li>12GB Bandwidth</li>
                                        <li>32GB Storage</li>
                                    </ul>
                                </div>
                                <div className="price-for-user">
                                    <div className="price"><sup>$</sup><span className="dolar a-color">35</span><small className="month">Per month</small></div>
                                </div>
                                <div className="button"><a href="#" className="btn btn-outline btn-color pricing-btn button-theme">Select Plan</a></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="pricing">
                                <div className="title">Expert Plan</div>
                                <div className="content">
                                    <ul>
                                        <li>20 Projects</li>
                                        <li>32GB Storage</li>
                                        <li>50 Email Accounts</li>
                                        <li>12GB Bandwidth</li>
                                        <li>32GB Storage</li>
                                    </ul>
                                </div>
                                <div className="price-for-user">
                                    <div className="price"><sup>$</sup><span className="dolar">38</span><small className="month">Per month</small></div>
                                </div>
                                <div className="button"><a href="#" className="btn btn-outline pricing-btn">Select Plan</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;