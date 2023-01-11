// @flow 
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerSection from './BannerSection';
import JobCategories from './JobCategories';
import JobSection from './JobSection';

const Home = () => {
    return (
        <>
         <div className="page-wrapper">
                <Header />
                <BannerSection />
                <JobCategories />
                <JobSection />
                <Footer />
            </div>
        </>
    );
};

export default Home;