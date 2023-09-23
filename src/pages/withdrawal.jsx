import React from "react";
import { FaArrowLeft, FaPhone } from "react-icons/fa";

export default function Withdrawal() {

   const phone = window.sessionStorage.getItem("phone");
   const balance = window.sessionStorage.getItem("balance");

   function maskNumber(number) {
      const numberStr = String(number);
      if (numberStr.length >= 6) {
         // Extract the first 3 characters
         const firstPart = numberStr.slice(0, 3);
         const lastPart = numberStr.slice(-3);
         const maskedStr = `${firstPart}***${lastPart}`;

         return maskedStr;
      }
      return numberStr;
   }
   return (
      <div className="withdrawal recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light">
            <FaArrowLeft /> <span>Withdrawal</span> <FaPhone />
         </div>
         <div className="container mt-4">
            <div className="amt-box rounded">
               <div className="amt text-center p-3 text-light">
                  <span className="fs-1 fw-bold">₦{balance}</span> <br />
                  <span className=" text-mute">
                     amount that can be withdrawn
                  </span>
               </div>

               <div className="card shadow">
                  <div className="card-body bg-none">
                     <div className="row">
                        <dt className="col-5 text-secondary small">
                           account name
                        </dt>
                        <dd className="col-7 small">sheriff</dd>
                        <dt className="col-5 text-secondary small">
                           Mobile number
                        </dt>
                        <dd className="col-7 small">{maskNumber(phone)}</dd>
                        <dt className="col-12 text-secondary small switch-type">
                           <div className="custom-control custom-radio">
                              <input
                                 type="radio"
                                 name="type"
                                 className="custom-control-input me-3"
                                 id="customradio4"
                                 value="payout_bank"
                              />
                              <label
                                 className="custom-control-label"
                                 for="customradio4"
                              >
                                 withdraw cash to bank card
                              </label>
                           </div>
                        </dt>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mt-5">
            <h6 className="h4">withdrawal amount</h6>
            <div className="form-group">
               <input
                  type="tel"
                  autocomplete="off"
                  className="form-control  rounded-pill mb-3"
                  name="num"
                  id="num"
                  placeholder="Please enter the withdrawal amount"
               />
            </div>
            <div className="form-group">
               <input
                  type="password"
                  autocomplete="new-password"
                  className="form-control  rounded-pill"
                  name="paypassword"
                  placeholder="Please enter the fund password"
               />
            </div>
            <button
               type="button"
               className="btn btn-purple rounded-pill w-100 text-light fs-5 mt-4"
               onClick={() => alert("Please withraw after completing the remaing task")}
            >
               Withdraw
            </button>
            <div className="text-mute small mt-3">
               <p>
                  1. There are a large number of people withdrawing cash, and it
                  takes about 3-30 minutes to successfully enter the account
                  <br />
                  2. There is no handling fee for withdrawals.
               </p>
            </div>
         </div>
      </div>
   );
}
