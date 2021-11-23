import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar/>
      <>
       <Particles 
                className = "particles-canvas"
                params={{
                
                        "particles": {
                            "color": {
                                "value": "#dda31c",
                            },
                            "links": {
                                "color": "#dda31c",
                                "distance": 150,
                                "enable": true,
                                "opacity": 0.5,
                                "width": 1,
                            },
                            
                            "move":{
                                "direction": "none",
                                "enable": true,
                                "outMode": "bounce",
                                "random": true,
                                "speed": 3,
                                "straight": true,
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "value_area": 800,
                                },
                                "value": 80,
                            },
                            "opacity": {
                                "value": 1,
                            },
                            "shape": {
                                "type": "circle",
                            },
                            "size": {
                                "random": true,
                                "value": 5,
                            },
                            },
                            "detectRetina": false,
                        
                        "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }
                    }
                }}
            />
            <Header/>

      </>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
