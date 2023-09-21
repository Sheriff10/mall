import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";


export default function ChangePassword() {
   return (
      <div className="bc recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light text-uppercase">
            <FaArrowLeft /> <span>Change Password</span> <MdNotifications />
         </div>

         <div className="container">
            {/* Form */}
            <form className="col-lg-6 mx-auto mt-4">
               <div className="head pb-2">
                  <span className="fw-bold">CHANGE PASSWORD</span>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Old password</div>
                  <select className="form-select rounded-pill p-2 small bg-white"></select>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">New password</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                  />
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Confirm password</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                  />
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
