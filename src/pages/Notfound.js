import React from "react";
import { Navbar } from "../navbar";
import { NavLink } from "react-router-dom";

export const Notfound=() => {
return(
<>
<Navbar/>
<div id="notfound">
 <div className="notfound container text-center d-flex flex-column justify-content-center align-items-center">
  <h1>404</h1>
  <div className="notfound-404">
  <h2>SORRY, PAGE NOT FOUND!</h2>
  <p>The Page You Are Looking for Temporarily Unavailable Or Removed Or Name Changed.</p>
  <NavLink to="/" className="btn btn-info ">BACK TO HOMEPAGE</NavLink>
  </div>
 </div>
</div>

</>
);
}
