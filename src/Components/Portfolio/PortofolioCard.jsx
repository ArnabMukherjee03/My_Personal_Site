import React from "react";
import { NavLink } from "react-router-dom";




const PortfolioCard = (Props)=>{
    return(
        <div className="row">
                         <div className="col-8 portfolio-card gy-4  px-5 mx-auto">
                         <div className="row">
                            <div className="col-md-5 text-center ps-lg-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-start flex-column">
                             <h3 className="mt-4">{Props.title}</h3>
                             <p className="pt-3">
                             {Props.des}
                             </p>
                             <div className="d-flex tech mt-2 justify-content-center align-item-center">
                             <p>{Props.pl1}</p>
                             <p>{Props.pl2}</p>
                             <p>{Props.pl3}</p>
                             </div>
                             <p className="text-center mt-4"> <NavLink className="btn code-btn btn-primary">Code  <i class="fa-brands fa-github"></i></NavLink></p>
                            </div>
                            <div className="col-lg-7 p-img order-1 order-lg-1 about-img" style={{backgroundImage: `url(${Props.imgsrc})` }}>
                               
                            </div>
                            </div>
                         </div>
        </div>
    )
}

export default PortfolioCard;