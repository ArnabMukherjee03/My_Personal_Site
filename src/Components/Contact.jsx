import React from "react";

const Contact = ()=>{
    return(
        <section id="Contact" className="my-3">
             <div className="my-5">
             <h1 className="text-center">Contact Me</h1>
             <p className="text-center">Don't be shy! Hit me up!</p>
             </div>
             <div className="container-fluid  my-5">
             <div className="row my-5">
                <div className="col-10 mx-auto">
                <div className="row contact-content">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <div className="round d-flex  align-items-center justify-content-center ">
                            Get in Touch
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column   justify-content-center">
                        <p className="ms-5 ps-5"><i class="fa-solid fa-envelope"></i> arnabmukherjee58260@gmail.com</p>
                        <p className="ms-5 ps-5"><i class="fa-brands fa-github"></i> ArnabMukherjee03</p>
                    </div>
                </div>
                </div>
             </div>
             </div>
        </section>
    )
}

export default Contact;