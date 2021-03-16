import React from 'react';

const HomeAbout = () => {
    return (
        <div className="homeAboutMain mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-5 me-5">
                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Mask%20Group%203.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-6">
                        <br/>
                        <br/>
                        <h1 className="h1">Exceptional Dental Care on Your Terms</h1>
                        <br/>
                        <h4 style={{color: "#aaa"}} className="text-lighter">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h4>
                        <br/>
                        <button className="btn btn-info text-light px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;