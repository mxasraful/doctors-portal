import React from 'react';

const OurBlog = () => {
    return (
        <div className="ourBlogMain">
            <div className="container">
                <h4 className="text-info text-center">OUR BLOG</h4>
                <br />
                <h1 className="h1 text-center">From Our Blog & News</h1>
                <br /><br /><br /><br />
                <div className="row">
                    <div className="col-4">
                        <div className="card blogItem testimonialItem blogItemActive">
                            <div className="card-body">
                                <div className="bloggerInfo">
                                    <br/><br/>
                                    <h5 className="text-light mt-3 bloggerName"><strong>Rased Kabir</strong></h5>
                                    <h5 className="blogDate text-light">21, Aug, 2020</h5>
                                </div><br/>
                                <h5 className="text-light blogItemTitle"><strong>2 Times brush in a day can keep your healthy.</strong> </h5><br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card blogItem testimonialItem">
                            <div className="card-body">
                                <div className="bloggerInfo testimonialUserInfo d-flex ">
                                    <div className="col-5">
                                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Ellipse%201.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-7">
                                        <h4 className="text-dark mt-3"><strong>Winson Herry</strong> </h4>
                                        <h5>21, Apr, 2020</h5>
                                    </div>
                                </div>
                                <h5 className="text-dark"><strong>2 Times brush in a day can keep your healthy.</strong> </h5>
                                <h6 style={{ textAlign: "left" }} className="blogItemText testimonialText">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card blogItem testimonialItem">
                            <div className="card-body">
                                <div className="bloggerInfo testimonialUserInfo d-flex ">
                                    <div className="col-5">
                                        <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/master/images/Ellipse%201.png" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-7">
                                        <h4 className="text-dark mt-3"><strong>Winson Herry</strong> </h4>
                                        <h5>21, Apr, 2020</h5>
                                    </div>
                                </div>
                                <h5 className="text-dark"><strong>2 Times brush in a day can keep your healthy.</strong> </h5>
                                <h6 style={{ textAlign: "left" }} className="blogItemText testimonialText">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;