import React from 'react';

const HomeContact = () => {
    return (
        <div className="homeContactMain">
            <div className="container">
                <h4 className="text-info text-center mt-5 mb-4">CONTACT US</h4>
                <h1 className="h1 text-light text-center mb-5">Always Connect With Us</h1>
                <br/>
                <form className="contactForm text-center">
                    <div class="mb-3">
                        <input type="email" class="form-control contactInput" id="exampleFormControlInput1" placeholder="Email address" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control contactInput" id="exampleFormControlInput1" placeholder="Subject" />
                    </div>
                    <div class="mb-3">
                        <textarea rows="5" type="text" class="form-control contactInput" id="exampleFormControlInput1" placeholder="Your Message" ></textarea>
                    </div>
                    <input className="btn btn-info btn-lg px-5 text-light" type="submit" name="" id=""/>
                </form>
            </div>
        </div>
    );
};

export default HomeContact;