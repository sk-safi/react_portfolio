import React from "react";
import Typewriter from "typewriter-effect";

function Header() {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web Development</h1>
                <div className="typed">
                    <Typewriter
                        onInit = {(typewriter) => {
                            typewriter
                                .typeString("Web Developer")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Python")
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            strings: ['Hello', 'World'],
                            autoStart: true,
                            loop: true,
                          }}
                    />
                </div>
                <a href="#" className="btn-main-offer">Hello World!</a>
            </div>
        </div>
    )
}

export default Header;
