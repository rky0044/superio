import React from 'react';

const AboutSection = () => {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">

                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column wow fadeInUp">
                                <div className="sec-title">
                                    <h2>Millions of Jobs. Find the one that suits you.</h2>
                                    <div className="text">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</div>
                                </div>
                                <ul className="list-style-one">
                                    <li>Bring to the table win-win survival</li>
                                    <li>Capitalize on low hanging fruit to identify</li>
                                    <li>But I must explain to you how all this</li>
                                </ul>
                                <a href="#" className="theme-btn btn-style-one bg-blue"><span className="btn-title">Get Started</span></a>
                            </div>
                        </div>


                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <figure className="image wow fadeInLeft"><img src="images/resource/image-2.jpg" alt="" /></figure>


                            <div className="count-employers wow fadeInUp">
                                <div className="check-box"><span className="flaticon-tick"></span></div>
                                <span className="title">300k+ Employers</span>
                                <figure className="image"><img src="images/resource/multi-logo.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>



                    <div className="fun-fact-section">
                        <div className="row">

                            <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                                <div className="count-box"><span className="count-text" data-speed="3000" data-stop="4">0</span>M</div>
                                <h4 className="counter-title">4 million daily active users</h4>
                            </div>


                            <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                <div className="count-box"><span className="count-text" data-speed="3000" data-stop="12">0</span>k</div>
                                <h4 className="counter-title">Over 12k open job positions</h4>
                            </div>


                            <div className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                <div className="count-box"><span className="count-text" data-speed="3000" data-stop="20">0</span>M</div>
                                <h4 className="counter-title">Over 20 million stories shared</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};


export default AboutSection;