import React from "react";
import assignment from "../pictures/assignment.png";
import demo from "../pictures/demo.png";
import web_portfolio from "../pictures/web_portfolio.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager , PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () =>{

        const openPopupbox1 = () => {
          const content = (
            <div>
              <img className="popup-image" src={web_portfolio} alt="" />
              <p className="popup-text">Dance like no one is watching.</p>
              <a href="" className="popup-link"></a>
            </div>
          )
          PopupboxManager.open({ content })
        }

        const popupboxConfig1 = {
            titleBar:{
                enable: true,
                text: 'Portfolio using HTML/CSS/JAVA-SCRIPT'
            },
            fadeIn: true,
            fadeInSpeed: 500
        }


        const openPopupbox2 = () => {
            const content = (
              <div>
                <img className="popup-image" src={assignment} alt="" />
                <p className="popup-text">Dance like no one is watching.</p>
                <a href="" className="popup-link"></a>
              </div>
            )
            PopupboxManager.open({ content })
          }
  
          const popupboxConfig2 = {
              titleBar:{
                  enable: true,
                  text: 'Portfolio using HTML/CSS/JAVA-SCRIPT'
              },
              fadeIn: true,
              fadeInSpeed: 500
          }

          const openPopupbox3 = () => {
            const content = (
              <div>
                <img className="popup-image" src={demo} alt="" />
                <p className="popup-text">Dance like no one is watching.</p>
                <a href="" className="popup-link"></a>
              </div>
            )
            PopupboxManager.open({ content })
          }
  
          const popupboxConfig3 = {
              titleBar:{
                  enable: true,
                  text: 'Portfolio using HTML/CSS/JAVA-SCRIPT'
              },
              fadeIn: true,
              fadeInSpeed: 500
          }
        

          const openPopupbox4 = () => {
            const content = (
              <div>
                <img className="popup-image" src={web_portfolio} alt="" />
                <p className="popup-text">Dance like no one is watching.</p>
                <a href="" className="popup-link"></a>
              </div>
            )
            PopupboxManager.open({ content })
          }
  
          const popupboxConfig4 = {
              titleBar:{
                  enable: true,
                  text: 'Portfolio using HTML/CSS/JAVA-SCRIPT'
              },
              fadeIn: true,
              fadeInSpeed: 500
          }


        return(
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                <h1 className="text-header py-5">Portfolio</h1>
                    <div className="projects">
                        <div className="box-image " onClick={openPopupbox1}>
                            <img src={web_portfolio} alt="" className="image" />
                            <div className="overflow" ></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                        {/* - */}
                        <div className="box-image  " onClick={openPopupbox2}>
                            <img src={assignment} alt="" className="image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div>
                        {/* - */}
                        <div className="box-image  " onClick={openPopupbox3}>
                            <img src={demo} alt="" className="image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div> 
                        {/* - */}
                        <div className="box-image " onClick={openPopupbox4}>
                            <img src={web_portfolio} alt="" className="image" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        </div> 
                        <PopupboxContainer { ...popupboxConfig1 } />
                        <PopupboxContainer { ...popupboxConfig2 } />
                        <PopupboxContainer { ...popupboxConfig3 } />
                        <PopupboxContainer { ...popupboxConfig4 } />
                    </div>            
                </div>
            </div>
        )
}

export default Portfolio