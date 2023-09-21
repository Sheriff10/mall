import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

export default function BindCard() {
   return (
      <div className="bc recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light text-uppercase">
            <FaArrowLeft /> <span>Bind Bank card</span> <MdNotifications />
         </div>

         <div className="container">
            {/* Form */}
            <form className="col-lg-6 mx-auto mt-4">
               <div className="head pb-2">
                  <span className="fw-bold">YOUR BANK CARD INFORMATION</span>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Bank-list</div>
                  <select className="form-select rounded-pill p-2 small bg-white"></select>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Bank A/C</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                  />
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Real Name</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                  />
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">please enter the fund password </div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                  />
               </div>
               <div className="btn-wrap">
                  <button className="btn btn-purple w-100 rounded-pill text-light p-2">
                     {" "}
                     CONFIRM MODIFICATION
                  </button>
               </div>
               <p className="text-muted small">
                  Please enter the correct bank AC number and the IFSC number to
                  which the bank AC is tied, and fill in your real name and real
                  mobile phone number, otherwise the payment will not arrive
               </p>
            </form>
         </div>
      </div>
   );
}
