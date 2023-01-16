import React, { useEffect, useState } from 'react';
import Header from '../candidate/Header';
import SideBar from './SideBar';
import UserDashboard from './UserDashboard';
import Footer from '../candidate/Footer';
import axios from 'axios';

const Dashboard = () => {

  
    return (
        <>
            <div className="page-wrapper dashboard">
                <Header />
                <SideBar />
                <UserDashboard />

                <Footer/>

            </div>
        </>
        
    )
    
}



export default Dashboard;