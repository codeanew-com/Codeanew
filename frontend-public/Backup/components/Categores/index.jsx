import React from 'react'
const Index = () => {

    // Adjust the header using the custom hook  


    return (
        <>
            <header className="testimonia-header" style={{ textAlign: 'center', margin: '30px 0' }}>
                <h1>Categories</h1>
            </header>
            <div className="features-section content-area">
                <div style={{ margin: '20px 150px' }}>
                    <div className="row features-row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-cloud"></i>
                                </div>
                                <h3>Small to Medium-Sized Businesses (SMBs)</h3>
                                <p>Description: Businesses aiming to create or improve their online presence.</p>
                                <p>Needs: cloud services, software development, mobile app development, and website development.</p>
                                <p>Value Proposition: Affordable, scalable, and tailored solutions to drive business growth and efficiency. </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-logo"></i>
                                </div>
                                <h3>Startups</h3>
                                <p>Description: Innovative startups seeking to disrupt markets and scale quickly.</p>
                                <p>Needs: End-to-end development services, including MVP creation, rapid prototyping, and cloud
                                    infrastructure.</p>
                                <p>Value Proposition: Agile and flexible services designed to support rapid growth and market entry.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-request"></i>
                                </div>
                                <h3>E-commerce Businesses</h3>
                                <p>Description: Online retailers aiming to improve their digital storefront and customer experience.</p>
                                <p>Needs: Custom e-commerce platforms, mobile apps, and seamless integration with payment gateways and logistics systems.</p>
                                <p>Value Proposition: Enhanced user experience, increased conversion rates, and optimized backend
                                    operations for e-commerce success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '20px 150px' }}>
                    <div className="row features-row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-network"></i>
                                </div>
                                <h3>Tech-Savvy Individuals and Developers</h3>
                                <p>Description: Individual developers and tech enthusiasts looking for reliable development and cloud
                                    solutions.</p>
                                <p>Needs: Development tools, cloud services, and DevOps support.</p>
                                <p>Value proposition: access to state-of-the-art tools and knowledgeable assistance to realize their ideas.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-network"></i>
                                </div>
                                <h3>Enterprises</h3>
                                <p>Description: Large organizations with complex requirements and high standards.</p>
                                <p>Needs: Robust and secure software solutions, cloud migration, DevOps, and continuous
                                    integration/continuous deployment (CI/CD) practices.</p>
                                <p>Value Proposition: Comprehensive solutions with a focus on reliability, security, and scalability to meet
                                    enterprise-level demands.
                                </p>
                            </div>
                        </div>



                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="features-info">
                                <div className="icon">
                                    <i className="flaticon-network"></i>
                                </div>
                                <h3>Educational Institutions</h3>
                                <p>Description: Schools, colleges, and universities aiming to integrate technology into their educational
                                    framework.</p>
                                <p>Needs: E-learning platforms, mobile apps for student engagement, and cloud solutions for data
                                    management.</p>
                                <p>Value Proposition: Innovative and user-friendly solutions to enhance the learning experience and
                                    streamline administrative tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Index