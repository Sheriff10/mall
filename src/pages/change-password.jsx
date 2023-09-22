import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import Loader from "./loader";

export default function ChangePassword() {
   const [old_password, setOld_password] = useState("");
   const [new_password, setNew_password] = useState("");
   const [conpass, setConpass] = useState("");

   const [passErr, setPassErr] = useState("");
   const [err, setErr] = useState("");
   const [loading, setloading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setloading(true);
      try {
         console.log("njrk");
         if (new_password !== conpass) {
            setloading(false);
            return setPassErr("password does not match");
         }

         const phone = window.sessionStorage.getItem("phone");
         const data = { old_password, new_password, phone };

         const response = await axios.post(
            `${window.api}/update-password`,
            data
         );
         console.log(response);
         setErr("");
         setPassErr("");
         setloading(false);

         window.alert("Password Updated");
      } catch (error) {
         setErr("wrong password");
         setloading(false);
         console.log(error);
      }
   };
   return (
      <div className="bc recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light text-uppercase">
            <FaArrowLeft /> <span>Change Password</span> <MdNotifications />
         </div>
         <Loader loading={loading} />

         <div className="container">
            {/* Form */}
            <form className="col-lg-6 mx-auto mt-4" onSubmit={handleSubmit}>
               <div className="head pb-2">
                  <span className="fw-bold">CHANGE PASSWORD</span>
               </div>
               <div className="formg-group mb-1">
                  <div className="small m-1">Old password</div>
                  <input
                     type="password"
                     className="form-control rounded-pill p-2 small bg-white"
                     value={old_password}
                     required
                     onChange={(e) => setOld_password(e.target.value)}
                  />
               </div>
               <div className="err-wrap">
                  <small className="fw-bold text-danger">{err}</small>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">New password</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                     value={new_password}
                     required
                     onChange={(e) => setNew_password(e.target.value)}
                  />
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Confirm password</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                     value={conpass}
                     required
                     onChange={(e) => setConpass(e.target.value)}
                  />
               </div>
               <div className="err-wrap">
                  <small className="fw-bold text-danger">{passErr}</small>
               </div>
               <div className="btn-wrap">
                  <button className="btn btn-purple w-100 rounded-pill text-light p-2">
                     Next
                  </button>
               </div>
               <p class="text-mute small mt-4">
                  Please remember your password . if you forget your password,
                  please contact customer service .{" "}
               </p>
            </form>
         </div>
      </div>
   );
}
