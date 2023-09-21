import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./loader";

export default function Register() {
   const [phone, setPhone] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState("");

   const navi = useNavigate()

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         const data = { phone, password, username };
         const response = await axios.post(`${window.api}/auth/signup`, data);
         console.log(response);
         setLoading(false);
         navi("/login")
      } catch (error) {
         setLoading(false);
         setErr("Phone number used");
         console.log(error);
      }
   };
   return (
      <div className="register">
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

            <form onSubmit={handleSubmit}>
               <div className="col-lg-4 mx-auto mt-4">
                  <div className="err-wrap">
                     <small className="fw-bold text-danger small text-lowercase">
                        {err}
                     </small>
                  </div>
                  <input
                     type="text"
                     className="rounded-pill form-control text-center border-none p-2 mb-2"
                     placeholder="Please enter a user name"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                  />
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
                  <input
                     type="text"
                     className="rounded-pill form-control  text-center border-none p-2 mb-2"
                     placeholder="Please enter the invitation code"
                     required
                  />
               </div>

               <div className="btn-wrap">
                  <button className="btn btn-purple w-100 rounded-pill text-white mt-4 p-3 mb-4">
                     Register
                  </button>
                  <Link to={"/login"} className="text-purple">
                     Login
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
}
