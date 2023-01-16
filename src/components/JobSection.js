
import React, { useEffect, useState } from 'react';
import axios from 'axios';





const JobSection = () => {


    const [jobs, setJobs] = useState("");

    useEffect(() => {

        axios.get("https://virvit.mydevpartner.website/vvapi/v1/jobs/").then((response) => {
            console.log(response.data.results, "job response,,")
            setJobs(response.data.results);
        })
    }, [])
    return (
        <>
            <section className="job-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Featured Jobs</h2>
                        <div className="text">Know your worth and find the job that qualify your life</div>
                    </div>

                    <div className="row wow fadeInUp">
                        {jobs && jobs?.map((item) =>

                            <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
                                <div className="inner-box">
                                    <div className="content">
                                        <span className="company-logo"><img src="images/resource/company-logo/1-1.png" alt="" /></span>
                                        <h4><a href="#">{item.title}</a></h4>
                                        <ul className="job-info">
                                            <li><span className="icon flaticon-briefcase"></span> Segment</li>
                                            <li><span className="icon flaticon-map-locator"></span> {item.state_detail.name} , {item.state_detail.country_detail.name}</li>
                                            <li><span className="icon flaticon-clock-3"></span> 11 hours ago</li>
                                            <li><span className="icon flaticon-money"></span> ${item.min_salary} - ${item.max_salary}</li>
                                        </ul>
                                        <ul className="job-other-info">

                                            <li className="time">{item.type}</li>
                                            {/* <li className="privacy">Private</li>
                                            <li className="required">Urgent</li> */}
                                        </ul>
                                        <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="btn-box">
                        <a href="#" className="theme-btn btn-style-one bg-blue"><span className="btn-title">Load More Listing</span></a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default JobSection;