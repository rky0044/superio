import React from 'react';

const AppSection = () => {
    return (
        <>
            <section class="app-section">
                <div class="auto-container">
                    <div class="row">

                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="bg-shape"></div>
                            <figure class="image wow fadeInLeft"><img src="images/resource/mobile-app.png" alt="" /></figure>
                        </div>

                        <div class="content-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInRight">
                                <div class="sec-title">
                                    <span class="sub-title">DOWNLOAD & ENJOY</span>
                                    <h2>Get the Superio Job<br /> Search App</h2>
                                    <div class="text">Search through millions of jobs and find the right fit. Simply<br /> swipe right to apply.</div>
                                </div>
                                <div class="download-btn">
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