import React from 'react';
import BannerBInfo from '../BannerBInfo/BannerBInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import HomeContact from '../HomeContact/HomeContact';
import OurBlog from '../OurBlog/OurBlog';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <BannerBInfo />
            <Services />
            <HomeAbout />
            <HomeAppointment />
            <Testimonial />
            <OurBlog />
            <OurDoctors />
            <HomeContact />
            <Footer />
        </div>
    );
};

export default Home;