import React, { useState } from "react";
import { FaArrowLeft, FaCreditCard, FaPhone } from "react-icons/fa";

export default function Recharge() {
   const [amount, setAmount] = useState("");
   const amountArr = [
      1000, 3000, 5000, 10000, 50000, 100000, 300000, 500000, 1000000, 2000000,
   ];
   return (
      <div className="recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light">
            <FaArrowLeft /> <span>Recharge</span> <FaPhone />
         </div>
         <div className="container">
            <form className="col-lg-10 mx-auto">
               <div className="form-group text-center">
                  <div className="span">Recharge Amount</div>
                  <input
                     type="number"
                     placeholder="00.00"
                     className="form-control rounded-pill bg-white mt-3 text-center"
                     value={amount}
                     onChange={e => setAmount(e.target.value)}
                  />
               </div>
               <div className="price-box col-lg-8 mx-auto">
                  <div className="row">
                     {amountArr.map((i, index) => (
                        <div className="col-6 p-2" key={index}>
                           <div
                              className="p-3 boxer text-center border-1 border rounded small"
                              onClick={() => setAmount(`${i}.00`)}
                           >
                              <span>{i}.00</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </form>

            {/* Recharge Box */}
            <div className="r-box mt-5">
               <div className="col-lg-3 p-3 rounded text-light rbk">
                  <button className="btn btn-purple w-100 rounded  text-light mb-2">
                     {" "}
                     <FaCreditCard /> Recharge
                  </button>{" "}
                  <br />
                  <span>Bank Transfer</span> <br />
                  <small>1000 ~ 2000000</small>
               </div>
            </div>

            {/* Caption Box */}
            <div className="cap p-3 shadow rounded bg-white my-5">
               <small className="text-secondary">
                  *1. The payment amount must be the same as the order amount,
                  otherwise it will not arrive automatically
               </small>{" "}
               <br />
               <small className="text-secondary">
                  *2. if you do not receive recharge and withdrawal, please
                  consult your supervisor to solve other problems .
               </small>
            </div>
         </div>
      </div>
   );
}
