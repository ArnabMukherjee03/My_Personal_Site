import React from "react";
import Data from './Data';
import PortfolioCard from "./PortofolioCard";

const Portfolio = ()=>{
    return(
        <section id="Portfolio" className="Portfolio my-4">
              <div className="my-5">
                   <h1 className="text-center">Portfolio</h1>
              </div>
              <div className="container-fluid">
                 {
                    Data.map((val)=>{
                        return <PortfolioCard
                            imgsrc = {val.imgsrc}
                            title = {val.title}
                            des = {val.des}
                            pl1 = {val.Pl1}
                            pl2 = {val.pl2}
                            pl3 = {val.pl3}
                        />
                    })
                 }
              </div>
        </section>
    )
}

export default Portfolio;