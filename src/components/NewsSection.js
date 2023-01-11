import React from 'react';

const NewsSection = () => {
    return (
        <>
            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Recent News Articles</h2>
                        <div className="text">Fresh job related news content posted each day.</div>
                    </div>

                    <div className="row wow fadeInUp">

                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/news-1.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">Attract Sales And Profits</a></h3>
                                    <p className="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>


                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/news-2.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">5 Tips For Your Job Interviews</a></h3>
                                    <p className="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>


                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="images/resource/news-3.jpg" alt="" /></figure>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-meta">
                                        <li><a href="#">August 31, 2021</a></li>
                                        <li><a href="#">12 Comment</a></li>
                                    </ul>
                                    <h3><a href="blog-single.html">An Overworked Newspaper Editor</a></h3>
                                    <p className="text">A job ravenously while Far much that one rank beheld after outside....</p>
                                    <a href="#" className="read-more">Read More <i className="fa fa-angle-right"></i></a>
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