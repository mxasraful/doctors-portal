import React from 'react';
import doctorsImg from './../../images/5790-removebg.png'

const HomeAppointment = () => {
    return (
        <div className="homeAppointmentMain">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={doctorsImg} alt="" className="homeAppointmentImg"/>
                    </div>
                    <div className="col-7">
                        <h5 className="text-info  text-uppercase">Appointment</h5>
                        <h1 style={{fontWeight: "bold"}} className="h1 display-4 text-light">Make An Appointment Today</h1>
                        <br/>
                        <span className="h4 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                        <br/><br/>
                        <button className="btn btn-info px-4 text-light">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;