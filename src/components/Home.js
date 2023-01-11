// @flow 
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerSection from './BannerSection';
import JobCategories from './JobCategories';
import JobSection from './JobSection';
import TestimonialSection from './TestimonialSection'

const Home = () => {
    return (
        <>
         <div className="page-wrapper">
                <Header />
                <BannerSection />
                <JobCategories />
                <JobSection />
                <TestimonialSection />
                <Footer />
            </div>
        </>
    );
};

export default Home;