import React, {useState} from "react";
import Heroienpic from "./Image/heroine.png";

export const Contact=() =>{
  const [userData, setUserData]=useState({
fname:"",
lname:"",
phonenum:"",
email:"",
address:"",
message:""
});
let name, value;
const postUserData=(event)=>{
  name=event.target.name;
  value=event.target.value;
  setUserData({
...userData, [name] : value
  })
};
// Firebase bhi include hai....
const submitData=async (event)=>{
  event.preventDefault();
  const {fname,lname,phonenum,email,address,message} = userData;
  if(fname && lname && phonenum && email && address && message){
      const  res = fetch(
    'https://reactfirebaseapp-8837f-default-rtdb.firebaseio.com/userDataRecords.json',
    {
       method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
      body: JSON.stringify({
        fname,
        lname,
        phonenum,
        email,
        address,
        message,
      }),
  }
);

if(res){
  setUserData({
    fname:"",
lname:"",
phonenum:"",
email:"",
address:"",
message:""
      });
alert("Data saved successfully!!!");
}
// else{
// alert("Please Fill the Data");
// }
  }
  else{
    alert("Please Fill the Data");
    }
  
};
// console.log(userData);
    return (
      <>
      <section className="contactus-section">
          
        <div className="container">
            <div className="row">
             <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-5 contact-leftside ">
                 <h1 className="main-heading fw-bold">Connect With Our <br/>Sales Team</h1>
                 <p className="main-hero-para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vero nesciunt possimus.
                 </p>
                 <figure>
                     <img src={Heroienpic} alt="contactusimg" className="img-fluid img-thumbnail"></img>
                 </figure>
                </div>
                {/* right side content */}
                <div className="col-12 col-lg-7 contact-rightside">
                    <form method="post">
                    <div className="row ">
                     <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" className="form-control" placeholder="First Name" autoComplete="off" 
                         name="fname" id="" value={userData.fname} onChange={postUserData}/>
                     </div>
                     <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" className="form-control" placeholder="Last Name" autoComplete="off" 
                        name="lname" id="" value={userData.lname} onChange={postUserData}/>
                     </div>
                    </div>
                    <div className="row ">
                     <div className="col-12 col-lg-6 contact-input-field">
                        <input type="text" className="form-control" placeholder="Phone Number" autoComplete="off" 
                         name="phonenum" id="" value={userData.phonenum} onChange={postUserData}/>
                     </div>
                     <div className="col-12 col-lg-6 contact-input-field">
                     <input type="email" className="form-control" placeholder="Your Email" autoComplete="off" 
                     name="email" id="" value={userData.email} onChange={postUserData}/>
                     </div>
                    </div>
                    <div className="row contact-input-field">
                        <div className="col-12">
                            <input type="text"
                            autoComplete="off"
                            name="address"
                            id=""
                            value={userData.address}
                            onChange={postUserData}
                            className="form-control"
                            placeholder="Add Address"/>
                        </div>
                    </div>
                    <div className="row contact-input-field">
                        <div className="col-12">
                            <input type="text"
                            autoComplete="off"
                            name="message"
                            id=""
                            value={userData.message}
                            onChange={postUserData}
                            className="form-control"
                            placeholder="Enter Your Message"/>
                        </div>
                    </div>
                    <div className="form-check form-checkbox-style">
    <input type="checkbox" 
    className="form-check-input "
   id="flexCheckChecked"/>
    <label 
    className="form-check-label main-hero-para" 
    htmlFor="flexCheckChecked">I agree that the Tejupay may contact me at the email address or phone number above</label>
  </div>
  <button className="btn btn-style w-100" onClick={submitData}>
    Submit
    </button>

                    </form>
                </div>
              </div>
             </div>
            </div>
        </div>

      </section>
      </>
    );
  }