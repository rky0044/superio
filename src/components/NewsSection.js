import React from 'react';

const NewsSection = () => {
    return (
        <>
            <section class="news-section">
                <div class="auto-container">
                    <div class="sec-title text-center">
                        <h2>Recent News Articles</h2>
                        <div class="text">Fresh job related news content posted each day.</div>
                    </div>

                    <div class="row wow fadeInUp">

                        <div class="news-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/news-1.jpg" alt="" /></figure>
                                </div>
                                <div class="lower-content">
                                    <ul class="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">Attract Sales And Profits</a></h3>
                                    <p class="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>


                        <div class="news-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/news-2.jpg" alt="" /></figure>
                                </div>
                                <div class="lower-content">
                                    <ul class="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">5 Tips For Your Job Interviews</a></h3>
                                    <p class="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>


                        <div class="news-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="images/resource/news-3.jpg" alt="" /></figure>
                                </div>
                                <div class="lower-content">
                                    <ul class="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">An Overworked Newspaper Editor</a></h3>
                                    <p class="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default NewsSection;