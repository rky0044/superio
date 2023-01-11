import React from 'react';

const AppSection = () => {
    return (
        <>
            <section className="app-section">
                <div className="auto-container">
                    <div className="row">

                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="bg-shape"></div>
                            <figure className="image wow fadeInLeft"><img src="images/resource/mobile-app.png" alt="" /></figure>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">DOWNLOAD & ENJOY</span>
                                    <h2>Get the Superio Job<br /> Search App</h2>
                                    <div className="text">Search through millions of jobs and find the right fit. Simply<br /> swipe right to apply.</div>
                                </div>
                                <div className="download-btn">
                                    <a href="#"><img src="images/icons/apple.png" alt="" /></a>
                                    <a href="#"><img src="images/icons/google.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
};

export default AppSection;