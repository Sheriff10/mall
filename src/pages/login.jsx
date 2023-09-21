import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="register">
         <div className="world"></div>
         <div className="container text-center">
            <div className="img-wrap mt-5">
               <img src="ama.png" alt="" /> <br />
               <span className="fs-6 fw-bold">Amazon</span> <br /> <br />
               <small className="font-italic">
                  The poor and middle class work for money and the rich let
                  money work for them{" "}
               </small>
            </div>

            <form>
               <div className="col-lg-4 mx-auto mt-4">
                  <div className="form-group d-flex rounded-pill form-control p-0 mb-2">
                     <select className="form-select w-auto border-0 rounded-pill">
                        <option value="+234">+234</option>
                     </select>
                     <input
                        type="text"
                        className="rounded-pill form-control border-0  text-center border-none p-2 mb-2"
                        placeholder="Please enter your mobile number"
                     />
                  </div>
                  <input
                     type="password"
                     className="rounded-pill form-control  text-center border-none p-2 mb-2"
                     placeholder="Please enter your password"
                  />
               </div>

               <div className="btn-wrap">
                  <button className="btn btn-purple w-100 rounded-pill text-white mt-4 p-3 mb-4">
                     Login
                  </button>
                  <Link to={"/register"} className="text-purple">
                     Register
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
}
