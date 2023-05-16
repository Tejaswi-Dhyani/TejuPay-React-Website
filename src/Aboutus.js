import React ,{useState} from "react";
import Aboutusimg from "./Image/aboutusimg2.jpg";
import Aboutimg from "./Image/aboutuseimg3.png";
import howTouse from "./API/howTouseapi";


export const Aboutus = () =>{
    const [aboutdata, aboutsetdata]=useState(howTouse);
    console.log(aboutdata);
    return(
        <>
<section className="common-section our-services">
    <div className="container mb-5">
        <div className="row">
            <div className="col-12 col-lg-5 centermeimg our-services-left-img">
                <img src={Aboutusimg} alt="" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
                <h3 className="mini-title ">
                    -- Available @ google and ios app store only
                </h3>
                <h1 className="main-heading"> How to use the App?</h1>
            {
                aboutdata.map((curElem)=>{
                    return(
                        <>
                <div className="row our-services-info">
                    <div className="col-1 our-services-number"> {curElem.id}</div>
                    <div className="col-10 our-services-data">
                        <h2>{curElem.title}</h2>
                        <p className="main-hero-para">
                        {curElem.info}
                        </p>
                    </div>
                </div>
                
            
                        </>
                    );
                })
            }
            <br/>
                <button className="btn-style btn-style-border">Learn more</button>
            </div>
            
        </div>
    </div>
</section>
{/* Section part two start here.................. */}
<section className="common-section our-services ">
    <div className="container mb-5">
        <div className="row">
           <div className="col-12 col-lg-7 our-services-list ">
                <h3 className="mini-title">
                    -- Support in any languages
                </h3>
                <h1 className="main-heading">World class support is available 24/7</h1>
            {
                aboutdata.map((curElem)=>{
                    return(
                        <>
                <div className="row our-services-info">
                    <div className="col-1 our-services-number"> {curElem.id}</div>
                    <div className="col-10 our-services-data">
                        <h2>{curElem.title}</h2>
                        <p className="main-hero-para">
                        {curElem.info}
                        </p>
                    </div>
                </div>
                
            
                        </>
                    );
                })
            }
            <br/>
                <button className="btn-style btn-style-border">Learn more</button>
            </div>

            <div className="col-12 col-lg-5 centermeimg">
                <img src={Aboutimg} alt="" />
            </div>
            
        </div>
    </div>
</section>
        </>
    );

} 