import React from "react";
import logo from "../iron-man.png";
import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="about" className="nav-link" href="#">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="services" className="nav-link" href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="experience" className="nav-link" href="#">experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="portfolio" className="nav-link" href="#">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="testimonial" className="nav-link" href="#">testimonial</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} offset={-110} to="contact" className="nav-link" href="#">contact</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    )
}



export default Navbar;
