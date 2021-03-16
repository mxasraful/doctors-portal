import React from 'react';

const Footer = () => {
    return (
        <div className="footerMain">
            <div className="container">
                <div className="row">
                    <ul className="col-3">
                        <h4 className="text-info"> </h4>
                        <br />
                        <br/>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                    </ul>
                    <ul className="col-3">
                        <h4 className="text-info">Services</h4>
                        <br />
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                    </ul>
                    <ul className="col-3">
                        <h4 className="text-info">Oral Health</h4>
                        <br />
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                        <li><a href="/">Lorem Ipsum text</a></li>
                    </ul>
                    <ul className="col-3">
                        <h4 className="text-info">Our Address</h4>
                        <br />
                        <span>New York - 1010101 Houdson Years</span>
                        <br/><br/><br/>
                        <button className="btn btn-outline-info">
                            F
                        </button>
                        <button className="btn btn-outline-info">
                            G
                        </button>
                        <button className="btn btn-outline-info">
                            T
                        </button>
                        <br/><br/><br/>
                        <span>Call Now</span><br/>
                        <a href="tel:+612398389125" className="btn btn-info text-light px-5">+612398389125</a>
                    </ul>
                </div>
            </div>
            <div className="container text-center">
                <br/><br/>
                <span className="">Copyright © 2021 All Rights Received.</span>
                <br/><br/>
            </div>
        </div>
    );
};

export default Footer;