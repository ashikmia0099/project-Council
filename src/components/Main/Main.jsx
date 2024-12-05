import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Body/Footer';

const Main = () => {
    return (
        <div className='max-w-screen-xl	mx-auto '>
            {/* navbar */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div> 
    );
};

export default Main;