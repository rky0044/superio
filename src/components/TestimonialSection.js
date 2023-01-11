import React from 'react';

const TestimonialSection = () => {
    return (
        <>
            <section className="testimonial-section">
                <div className="container-fluid">

                    <div className="sec-title text-center">
                        <h2>Testimonials From Our Customers</h2>
                        <div className="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
                    </div>

                    <div className="carousel-outer wow fadeInUp">


                        <div className="testimonial-carousel owl-carousel owl-theme">


                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <h4 className="title">Good theme</h4>
                                    <div className="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div className="info-box">
                                        <div className="thumb"><img src="images/resource/testi-thumb-1.png" alt="" /></div>
                                        <h4 className="name">Nicole Wells</h4>
                                        <span className="designation">Web Developer</span>
                                    </div>
                                </div>
                            </div>


                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <h4 className="title">Great quality!</h4>
                                    <div className="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div className="info-box">
                                        <div className="thumb"><img src="./images/resource/testi-thumb-2.png" alt="" /></div>
                                        <h4 className="name">Gabriel Nolan</h4>
                                        <span className="designation">Consultant</span>
                                    </div>
                                </div>
                            </div>


                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <h4 className="title">Awesome Design </h4>
                                    <div className="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div className="info-box">
                                        <div className="thumb"><img src="images/resource/testi-thumb-3.png" alt="" /></div>
                                        <h4 className="name">Ashley Jenkins</h4>
                                        <span className="designation">Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default TestimonialSection;