import React from 'react';
import chairImg from './../../images/Mask Group 1.png'

const Banner = () => {
    return (
        <main className="container bannerMain">
            <div style={{height: "500px"}} className="row d-flex align-items-center">
                <div className="col-md-6 ">
                    <div className="col-8">
                        <h1>Your New Smile Starts Here.</h1><br />
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</span><br /><br />
                        <button className="btn btn-info text-light px-4">Get Appointment</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={chairImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default Banner;