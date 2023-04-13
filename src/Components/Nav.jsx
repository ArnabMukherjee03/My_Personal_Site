import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function nav() {
    return (
        <>
         <div className="container-fluid ">
                 <div className="row">
                         <div className="col-10 nav-con mx-lg-auto">
                             <nav className="navbar navbar-expand-lg ">
                                     <div className="container-fluid">
                                       <p className="navbar-brand">Arnab.dev</p>
                                       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                       <div class="hamburger">
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                            <span class="bar"></span>
                                        </div>
                                        </button>
                                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                              <li className="nav-item">
                                                <NavLink to='#Home' activeClassName="menu_active"  className="nav-link" aria-current="page" >Home</NavLink>
                                              </li>
                                              <li className="nav-item">
                                              <HashLink smooth to="#About" className="nav-link">
                                                 About Me
                                               </HashLink>
                                              </li>
                                              <li className="nav-item">
                                              <HashLink smooth to="#Technology" className="nav-link">
                                                Skills
                                               </HashLink>
                                              </li>
                                              <li className="nav-item">
                                              <HashLink smooth to="#Portfolio" className="nav-link">
                                                 Portfolio
                                               </HashLink>
                                            
                                              </li>
                                              <li className="nav-item">
                                              <HashLink smooth to="#Contact" className="nav-link">
                                                 Contact Me
                                               </HashLink>
                                              
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