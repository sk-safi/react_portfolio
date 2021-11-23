import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import avatar1 from"../avatars/2.jpg";
import avatar2 from"../avatars/girl.jpg";
import avatar3 from"../avatars/iron.png";
import avatar4 from"../avatars/jhon.png";

const TestimonialCarousel = () => {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                <>
                    <img className="avatar-img" src={avatar1} alt="" />
                    <div className="myCarousel">
                        <h3>jhon doe </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est nulla ipsa vero iusto voluptatibus velit harum ut 
                            impedit culpa? Velit quam a recusandae? Modi quas, ea sit 
                            aliquam et doloremque?
                        </p>
                    </div>
                </>
                <>
                    <img className="avatar-img" src={avatar2} alt="" />
                    <div className="myCarousel">
                        <h3>jhon doe </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est nulla ipsa vero iusto voluptatibus velit harum ut 
                            impedit culpa? Velit quam a recusandae? Modi quas, ea sit 
                            aliquam et doloremque?
                        </p>
                    </div>
                </>
                <>
                    <img className="avatar-img" src={avatar3} alt="" />
                    <div className="myCarousel">
                        <h3>jhon doe </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est nulla ipsa vero iusto voluptatibus velit harum ut 
                            impedit culpa? Velit quam a recusandae? Modi quas, ea sit 
                            aliquam et doloremque?
                        </p>
                    </div>
                </>
                <>
                    <img className="avatar-img" src={avatar4} alt="" />
                    <div className="myCarousel">
                        <h3>jhon doe </h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Est nulla ipsa vero iusto voluptatibus velit harum ut 
                            impedit culpa? Velit quam a recusandae? Modi quas, ea sit 
                            aliquam et doloremque?
                        </p>
                    </div>
                </>
            </Carousel>
        );
    }

    export default TestimonialCarousel;