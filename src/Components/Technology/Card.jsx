import React from "react";


const card =(Props)=>{
    return(
        <div className="col-md-4 col-10 mx-auto">
              <div className="card">
                      <img src={Props.imgsrc} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title ps-4">{Props.titleicon}{Props.title}</h5>
                        <ul className="ps-5 pt-2">
                            <li>{Props.lan1icon}{Props.lan1}</li>
                            <li>{Props.lan2icon}{Props.lan2}</li>
                            <li>{Props.lan3icon}{Props.lan3}</li>
                            <li>{Props.lan4icon}{Props.lan4}</li>
                            <li>{Props.lan5icon}{Props.lan5}</li>
                        </ul>
                      </div>
              </div>
        </div>
    )
}

export default card;