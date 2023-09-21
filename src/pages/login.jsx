import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./loader";

export default function Login() {
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState("");

   const navi = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         const data = { phone, password, username: "" };
         const response = await axios.post(`${window.api}/auth/login`, data);
         console.log(response);
         setLoading(false);

         // Set Number as session storage
         window.sessionStorage.setItem("phone", phone);
         navi("/dashboard");
      } catch (error) {
         setLoading(false);
         setErr("account does not exist ");
         console.log(error);
      }
   };
   return (
      <div className="register" onSubmit={handleSubmit}>
         <Loader loading={loading} />
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                     />
                  </div>
                  <input
                     type="password"
                     className="rounded-pill form-control  text-center border-none p-2 mb-2"
                     placeholder="Please enter your password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
               </div>
               <div className="err-wrap">
                  <small className="fw-bold text-danger">{err}</small>
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
