import React from 'react';

const Testimonial = () => {
    return (
        <div className="testimonialMain">
            <div className="container">
                <br/>
                <h5 className="text-info text-bold">TESTIMONIAL</h5>
                <br/>
                <h1 className="h1">What's Our Patients Says</h1>
                <br/><br/>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card testimonialItem">
                            <div className="card-body">
                                <br/>
                                <h6 className="testimonialText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <br/><br/>
                                <div className="testimonialUserInfo d-flex">
                                    <div className="col-5">
                                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Ellipse%201.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-7">
                                        <h4 className="text-info mt-3"><strong>Winson Herry</strong> </h4>
                                        <h5>California</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card testimonialItem">
                            <div className="card-body">
                                <br/>
                                <h6 className="testimonialText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <br/><br/>
                                <div className="testimonialUserInfo d-flex">
                                    <div className="col-5">
                                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Ellipse%202.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-7">
                                        <h4 className="text-info mt-3"><strong>Winson Herry</strong> </h4>
                                        <h5>California</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card testimonialItem">
                            <div className="card-body">
                                <br/>
                                <h6 className="testimonialText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                                <br/><br/>
                                <div className="testimonialUserInfo d-flex">
                                    <div className="col-5">
                                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Ellipse%203.png" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-7">
                                        <h4 className="text-info mt-3"><strong>Winson Herry</strong> </h4>
                                        <h5>California</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;