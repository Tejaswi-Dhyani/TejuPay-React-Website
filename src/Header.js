import React from "react";
// import {image1} from "../public/Image/image1.png";
import Heropic from "./Image/image2.png"


export const Header = () => {
    return(
        <>
        <header>
        <section className="container main-hero-container">
            <div className="row ">
                <div className="col-12 col-lg-6 header-left-side d-flex flex-column align-items-start  justify-content-center
                order-lg-first order-last">
                    <h1 className="display-2">
                        Online Payment Mode <br/> Easy For You
                    </h1>
                    <p className="main-hero-para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab perspiciatis quis ex velit accusantium iure voluptatum a debitis, adipisci deserunt eius hic omnis similique.
                    Harum iusto quisquam alias inventore nemo.
                    </p>
                    <h3>Get early access for you</h3>
                   
                    <div className="input-group mt-3 width100">
  <input type="text"  placeholder="Enter Your Email" aria-label="Recipient's username" 
  className="rounded-pill  p-2 me-2 form-control form-control-text"/>
  <span className="input-group-text " id="basic-addon2">Get it now</span>
</div>
                </div>
                <div className="col-12 col-lg-6 header-right-side d-flex justify-content-end align-items-center
                main-herosection-images order-md-first order-sm-first">
                    <img src={Heropic} alt="hero_image" 
                className="img-fluid heroimg"/>
                </div>
            </div>

        </section>
        </header>
        
        </>
    );
}