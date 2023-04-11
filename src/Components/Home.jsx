import React from "react";
import { NavLink } from "react-router-dom";

import Homeimg from "../Images/Home-img.png"
import Typewriter from "typewriter-effect";




const Home = ()=>{
    return(
        <section id="Home" className="d-flex mt-sm-5 align-items-center">
                <div className="container-fluid nav_bg">
                 <div className="row">
                         <div className="col-10 mx-auto">
                         <div className="row">
                            <div className="col-sm-1 order-3 order-lg-1  d-flex icons justify-content-center flex-lg-column">
                            <NavLink to=""><i class="fa-solid fa-envelope"></i></NavLink>
                            <NavLink to="https://www.linkedin.com/in/arnab-mukherjee-20b36221a/" target="_blank"><i class="fa-brands fa-linkedin"></i></NavLink>
                            <NavLink to="https://github.com/ArnabMukherjee03"  target="_blank"><i class="fa-brands fa-github"></i></NavLink>
                            </div>
                            <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                            <p className="top">Hello, My Name is</p>
                            <p className="name">Arnab Mukherjee</p>
                            <p className="text d-flex " >
                                I'm a
                                <span className="Animated-text">
                                <Typewriter 
                                  options={{
                                    strings: ['Student', 'Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                    deleteSpeed: 200,
                                  }}
                                />
                                </span>
                            </p>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-3  header-img">
                                <img src={Homeimg} className="img-fluid animated ms-5 home-img " alt="home img"/>
                            </div>
                            </div>
                         </div>
                     </div>
                 </div>
           </section>
    )
    
}

export default Home;
