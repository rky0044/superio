import React from 'react';

const AboutSection = () => {
    return (
        <>
            <section class="about-section">
                <div class="auto-container">
                    <div class="row">

                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div class="inner-column wow fadeInUp">
                                <div class="sec-title">
                                    <h2>Millions of Jobs. Find the one that suits you.</h2>
                                    <div class="text">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</div>
                                </div>
                                <ul class="list-style-one">
                                    <li>Bring to the table win-win survival</li>
                                    <li>Capitalize on low hanging fruit to identify</li>
                                    <li>But I must explain to you how all this</li>
                                </ul>
                                <a href="#" class="theme-btn btn-style-one bg-blue"><span class="btn-title">Get Started</span></a>
                            </div>
                        </div>


                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <figure class="image wow fadeInLeft"><img src="images/resource/image-2.jpg" alt="" /></figure>


                            <div class="count-employers wow fadeInUp">
                                <div class="check-box"><span class="flaticon-tick"></span></div>
                                <span class="title">300k+ Employers</span>
                                <figure class="image"><img src="images/resource/multi-logo.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>



                    <div class="fun-fact-section">
                        <div class="row">

                            <div class="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                                <div class="count-box"><span class="count-text" data-speed="3000" data-stop="4">0</span>M</div>
                                <h4 class="counter-title">4 million daily active users</h4>
                            </div>


                            <div class="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                <div class="count-box"><span class="count-text" data-speed="3000" data-stop="12">0</span>k</div>
                                <h4 class="counter-title">Over 12k open job positions</h4>
                            </div>


                            <div class="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                <div class="count-box"><span class="count-text" data-speed="3000" data-stop="20">0</span>M</div>
                                <h4 class="counter-title">Over 20 million stories shared</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};


export default AboutSection;