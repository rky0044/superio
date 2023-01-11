import React from 'react';

const TestimonialSection = () => {
    return (
        <>
            <section class="testimonial-section">
                <div class="container-fluid">

                    <div class="sec-title text-center">
                        <h2>Testimonials From Our Customers</h2>
                        <div class="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
                    </div>

                    <div class="carousel-outer wow fadeInUp">


                        <div class="testimonial-carousel owl-carousel owl-theme">


                            <div class="testimonial-block">
                                <div class="inner-box">
                                    <h4 class="title">Good theme</h4>
                                    <div class="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="images/resource/testi-thumb-1.png" alt="" /></div>
                                        <h4 class="name">Nicole Wells</h4>
                                        <span class="designation">Web Developer</span>
                                    </div>
                                </div>
                            </div>


                            <div class="testimonial-block">
                                <div class="inner-box">
                                    <h4 class="title">Great quality!</h4>
                                    <div class="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="./images/resource/testi-thumb-2.png" alt="" /></div>
                                        <h4 class="name">Gabriel Nolan</h4>
                                        <span class="designation">Consultant</span>
                                    </div>
                                </div>
                            </div>


                            <div class="testimonial-block">
                                <div class="inner-box">
                                    <h4 class="title">Awesome Design </h4>
                                    <div class="text">Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</div>
                                    <div class="info-box">
                                        <div class="thumb"><img src="images/resource/testi-thumb-3.png" alt="" /></div>
                                        <h4 class="name">Ashley Jenkins</h4>
                                        <span class="designation">Designer</span>
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