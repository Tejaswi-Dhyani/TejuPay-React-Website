import React, {useState} from "react";
import workapi from "./API/workApi";

export const Howitworks = () => {
    const [workData ,setworkData]=useState(workapi);
    console.log(workData);
    return(
        <>
      <section>
        <div className="container work-container">
              <h1 className="main-heading text-center">How does it work</h1>
            <div className="row">
                {
                    workData.map((curElem) => {
                        
                        return(
                        <>
                        <div className="col-12 col-lg-4 text-center work-container-subdiv">
                  <i className={`fontawesome-style ${curElem.logo}`}></i>
                  <h2 className="sub-heading">{curElem.title}</h2>
                  <p className="main-hero-para w-100">{curElem.info}</p>
              </div> 
                        </>
                        );
            
                    })
                }
              
            </div>
        </div>
      </section>

        </>
    );
}