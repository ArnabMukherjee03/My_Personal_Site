import React from "react";
import { NavLink } from "react-router-dom";


function nav() {
    return (
        <>
         <div className="container-fluid">
                 <div className="row">
                         <div className="col-10 mx-lg-auto">
                             <nav className="navbar navbar-expand-lg ">
                                     <div className="container-fluid">
                                       <p className="navbar-brand">Arnab.dev</p>
                                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                         <span className="navbar-toggler-icon"></span>
                                       </button>
                                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                              <li className="nav-item">
                                                <NavLink to='#Home' activeClassName="menu_active"  className="nav-link" aria-current="page" >Home</NavLink>
                                              </li>
                                              <li className="nav-item">
                                                <NavLink  activeClassName="menu_active" className="nav-link" >About Me</NavLink>
                                              </li>
                                              <li className="nav-item">
                                                <NavLink  activeClassName="menu_active" className="nav-link">Skills</NavLink>
                                              </li>
                                              <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link">Project</NavLink>
                                              </li>
                                              <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link">Contact Me</NavLink>
                                              </li>
                                            </ul>
                                        </div>
                                     </div>
                              </nav>
                         </div>
                     </div>
            </div>
        </>
    );
}

export default nav;