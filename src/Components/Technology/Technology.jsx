import React from "react";
import Carddata from "./Carddata";
import Card from "./Card";

const Technology = ()=>{
    return(
        <section id="Technology" className="">
        <div className="my-5">
            <h1 className="text-center">Technologies</h1>
            <p className="text-center">Known by me</p>
        </div>
        <div className="container-fluid">
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Carddata.map((val)=>{
                                    return <Card
                                        titleicon = {val.titleicon}
                                        imgsrc = {val.imgsrc}
                                        title = {val.title}
                                        lan1icon = {val.lan1icon}
                                        lan1 = {val.lan1}
                                        lan2icon = {val.lan2icon}
                                        lan2 = {val.lan2}
                                        lan3icon = {val.lan3icon}
                                        lan3 = {val.lan3}
                                        lan4icon = {val.lan4icon}
                                        lan4 = {val.lan4}
                                        lan5icon = {val.lan5icon}
                                        lan5 = {val.lan5}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Technology;