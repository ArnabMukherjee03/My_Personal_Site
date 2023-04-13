import React from "react";
import Aboutimg from "../Images/about-img.webp"
import Rotateimg from "../Images/about-text.svg"
import Manimg from "../Images/man.png"

const About = ()=>{
    return(
        <div id="About">
        <div className="my-5">
                <h1 className="text-center About-Head">About Me</h1>
                <p className="text-center">My Introduction</p>
        </div>
        <section id="About" className="d-flex mt-sm-5 align-items-center">
                <div className="container-fluid nav_bg">
                 <div className="row">
                         <div className="col-10 mx-auto">
                         <div className="row">
                            <div className="col-md-7 text-center pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                            <p className="ms-5 about-para">Hello everyone, Arnab this side.A budding software engineer from Dr. B.C Roy Engineering College,currently pursuing a Bachelor's degree in Computer Application.My experience has been primarily focused on building side projects using Web technologies such as HTML , CSS , JavaScript , Node.js , express.js and MongoDB. I have a strong foundation in programming languages such as C , Java , and JavaScript and currently Learning Python.I am always eager to learn new technologies and stay up-to-date with the latest trends in web development</p>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-1 about-img">
                                <img src={Aboutimg} className="img-fluid " alt="aboutimg"/>
                                <span className="rotate-img">
                                <img src={Rotateimg} alt="rotateimg" />
                                <img src={Manimg} alt="manimg" className="Manimg" />
                                </span>
                            </div>
                            </div>
                         </div>
                     </div>
                 </div>
           </section>
        </div>
    )
}

export default About;