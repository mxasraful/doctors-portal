import React from 'react';

const Services = () => {
    return (
        <div className="servicesMain">
            <div className="container text-center">
                <h5 className="text-uppercase text-info text-bold mt-3">Our Services</h5>
                <h2 className="text-dark mt-3 h1">Service We Provide</h2>
                <br/><br/>
                <div className="row mt-5 mb-5">
                    <div className="col-sm-4">
                        <div style={{ border: 'none' }} className="card">
                            <div className="card-body text-center">
                                <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/001-dental.png" alt="" className="" />
                            </div><br/>
                            <div style={{margin: "0 auto"}} className="col-10">
                                <h3 className="serviceTitle">Fluoride Treatment</h3><br/>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div style={{ border: 'none' }} className="card">
                            <div className="card-body text-center">
                                <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/tooth%20(1).png" alt="" className="" />
                            </div><br/>
                            <div style={{margin: "0 auto"}} className="col-10">
                                <h3 className="serviceTitle">Cavity Filling</h3><br/>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div style={{ border: 'none' }} className="card">
                            <div className="card-body text-center">
                                <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/tooth.png" alt="" className="" />
                            </div><br/>
                            <div style={{margin: "0 auto"}} className="col-10">
                                <h3 className="serviceTitle">Teats Widening</h3><br/>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        </div>
    );
};

export default Services;