// @flow 
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerSection from './BannerSection';
import JobCategories from './JobCategories';
import JobSection from './JobSection';
import TestimonialSection from './TestimonialSection'
import ClientsSection from './ClientsSection';
import AboutSection from './AboutSection';
import NewsSection from './NewsSection';
import AppSection from './AppSection';
import CallToAction from './CallToAction';

const Home = () => {
    return (
        <>
         <div className="page-wrapper">
                <Header />
                <BannerSection />
                <JobCategories />
                <JobSection />
                <TestimonialSection />
                <ClientsSection />
                <AboutSection />
                <NewsSection />
                <AppSection />
                <CallToAction />
                <Footer />
            </div>
        </>
    );
};

export default Home;