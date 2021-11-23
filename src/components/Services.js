import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop , faFileCode } from "@fortawesome/free-solid-svg-icons";




function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icons" icon={faFacebookF} size="2px"/></div>
                                <h3>Web Design</h3>
                                <p>Anyone Wants to develop any project please dm me in facebook</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icons" icon={faGoogle} size="2px"/></div>
                                <h3>Frontend Development</h3>
                                <p>Anyone Wants to develop any project please dm me in facebook</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icons" icon={faDesktop} size="2px"/></div>
                                <h3>Drawing</h3>
                                <p>Anyone Wants to develop any project please dm me in facebook</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icons" icon={faFileCode} size="2px"/></div>
                                <h3>Python</h3>
                                <p>Anyone Wants to develop any project please dm me in facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
