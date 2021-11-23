import React from 'react';
import { faFacebookF , faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <footer classNmae="footer">
           <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h5><i class="fa fa-road"></i>SK SAFIUL ISLAM</h5>
                        <div class="row">
                            <div class="col-6">
                                <ul class="list-unstyled">
                                    <li><a href="">Product</a></li>
                                    <li><a href="">Benefits</a></li>
                                    <li><a href="">Partners</a></li>
                                    <li><a href="">Team</a></li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul class="list-unstyled">
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Legal Terms</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <ul class="nav">
                            <li class="nav-item"><a href="" class="nav-link pl-0"><FontAwesomeIcon className="icons" icon={faFacebookF} size="2px"/></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><FontAwesomeIcon className="icons" icon={faInstagram} size="2px"/></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><FontAwesomeIcon className="icons" icon={faGithub} size="2px"/></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><FontAwesomeIcon className="icons" icon={faTwitter} size="2px"/></a></li>
                        </ul>
                        <br/>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
