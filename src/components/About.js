import React from "react";
import person from "../neha.png";



function About() {
    return (
        <div id="about" className="container py-5 about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-2">
                        <img className="portfolio-img" src={person} alt="person....."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello! I am SK SAFIUL ISLAM , a B.Tech graduate in computer science ,
                        experienced in web development,trained in selenium web-driver.

                        I am creating a portfolio using React.js by the helping of udemy 
                        courses and youtube
                        
                        To secure a position where I can efficiently contribute my skills 
                        and abilities to the growth of the organization and build my 
                        professional career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
