import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

export default function BindCard() {
   const [bank_name, setBank_name] = useState("");
   const [bank_account, setBank_account] = useState("");
   const [account_name, setAccount_name] = useState("");
   const [password, setPassword] = useState("");
   const [err, setErr] = useState("");

   const bankList = [
      "Opay",
      "Kuda",
      "Access bank",
      "Wema bank",
      "palmpay",
      "Zenith bank",
      "UBA",
      "GTBank",
   ];

   const phone = window.sessionStorage.getItem("phone");

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         const data = {
            bank_account,
            bank_name,
            account_name,
            password,
            phone,
         };
         const response = await axios.post(`${window.api}/bank`, data);
         console.log(response);
      } catch (error) {
         setErr("wrong password");
         console.log(error);
      }
   };

   return (
      <div className="bc recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light text-uppercase">
            <FaArrowLeft /> <span>Bind Bank card</span> <MdNotifications />
         </div>

         <div className="container">
            {/* Form */}
            <form className="col-lg-6 mx-auto mt-4" onSubmit={handleSubmit}>
               <div className="head pb-2">
                  <span className="fw-bold">YOUR BANK CARD INFORMATION</span>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Bank-list</div>
                  <select
                     className="form-select rounded-pill p-2 small bg-white"
                     onChange={(e) => setBank_name(e.target.value)}
                     value={bank_name}
                     required
                  >
                     <option defaultChecked>Select Bank</option>
                     {bankList.map((i) => (
                        <option value={i}>{i}</option>
                     ))}
                  </select>
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Bank A/C</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                     onChange={(e) => setBank_account(e.target.value)}
                     value={bank_account}
                     required
                  />
               </div>
               <div className="formg-group mb-4">
                  <div className="small m-1">Real Name</div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                     onChange={(e) => setAccount_name(e.target.value)}
                     value={account_name}
                     required
                  />
               </div>
               <div className="formg-group">
                  <div className="small m-1">
                     please enter the fund password{" "}
                  </div>
                  <input
                     type="text"
                     className="form-control rounded-pill p-2 small bg-white"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     required
                  />
               </div>
               <div className="err-wrap my-2">
                  <small className="fw-bold text-danger">{err}</small>
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
