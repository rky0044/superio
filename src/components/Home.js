// @flow 
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import BannerSection from './BannerSection';

const Home = () => {
    return (
        <>
         <div className="page-wrapper">
                <Header />
                <BannerSection />
                <Footer />
            </div>
        </>
    );
};

export default Home;