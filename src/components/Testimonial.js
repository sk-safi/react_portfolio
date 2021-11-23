import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
    return (
        <div id="testimonial" className="testimonial">
            <h1>my clint</h1>
            <div className="conatiner">
                <div className="testimonial-content">
                    <TestimonialCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
