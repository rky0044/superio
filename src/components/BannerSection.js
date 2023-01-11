import React from 'react';


const BannerSection =()=>{

    return(
        <>
            <section class="banner-section">
      <div class="auto-container">
        <div class="row">
          <div class="content-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column wow fadeInUp" data-wow-delay="1000ms">
              <div class="title-box">
                <h3>There Are <span class="colored">93,178</span> Postings Here<br /> For you!</h3>
                <div class="text">Find Jobs, Employment & Career Opportunities</div>
              </div>

              
              <div class="job-search-form">
                <form method="post" action="job-list-v10.html">
                  <div class="row">
                    <div class="form-group col-lg-5 col-md-12 col-sm-12">
                      <span class="icon flaticon-search-1"></span>
                      <input type="text" name="field_name" placeholder="Job title, keywords, or company" />
                    </div>
                  
                    <div class="form-group col-lg-4 col-md-12 col-sm-12 location">
                      <span class="icon flaticon-map-locator"></span>
                      <input type="text" name="field_name" placeholder="City or postcode" />
                    </div>
                   
                    <div class="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
                      <button type="submit" class="theme-btn btn-style-one"><span class="btn-title">Find Jobs</span></button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div class="popular-searches">
                <span class="title">Popular Searches : </span>
                <a href="#">Designer</a>,
                <a href="#">Developer</a>,
                <a href="#">Web</a>,
                <a href="#">IOS</a>,
                <a href="#">PHP</a>,
                <a href="#">Senior</a>,
                <a href="#">Engineer</a>,
              </div>
             
            </div>
          </div>

          <div class="image-column col-lg-5 col-md-12">
            <div class="image-box">
              <figure class="main-image wow fadeIn" data-wow-delay="500ms"><img src="images/resource/banner-img-1.png" alt="" /></figure>

             
              <div class="info_block anm wow fadeIn" data-wow-delay="1000ms" data-speed-x="2" data-speed-y="2">
                <span class="icon flaticon-email-3"></span>
                <p>Work Inquiry From <br />Ali Tufan</p>
              </div>

            
              <div class="info_block_two anm wow fadeIn" data-wow-delay="2000ms" data-speed-x="1" data-speed-y="1">
                <p>10k+ Candidates</p>
                <div class="image"><img src="images/resource/multi-peoples.png" alt="" /></div>
              </div>

             
              <div class="info_block_three anm wow fadeIn" data-wow-delay="1500ms" data-speed-x="4" data-speed-y="4">
                <span class="icon flaticon-briefcase"></span>
                <p>Creative Agency</p>
                <span class="sub-text">Startup</span>
                <span class="right_icon fa fa-check"></span>
              </div>

             
              <div class="info_block_four anm wow fadeIn" data-wow-delay="2500ms" data-speed-x="3" data-speed-y="3">
                <span class="icon flaticon-file"></span>
                <div class="inner">
                  <p>Upload Your CV</p>
                  <span class="sub-text">It only takes a few seconds</span>
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

export default BannerSection;