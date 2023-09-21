import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
   FaCreditCard,
   FaDollarSign,
   FaShare,
} from "react-icons/fa";

import Footer from "./footer";
import { MdOutlineSwipeLeft } from "react-icons/md";
const partnersImg = [
   "/amazon.png",
   "/walmart.png",
   "/snapdeal.png",
   "/shopify.png",
];
const revArr = [
   { name: "Emeka Okonkwo", amount: 16234 },
   { name: "Ngozi Eze", amount: 22345 },
   { name: "Chinedu Obi", amount: 7890 },
   { name: "Amina Mohammed", amount: 21567 },
   { name: "Oluwafemi Adeleke", amount: 13578 },
];
export default function Dashboard() {
    const navi = useNavigate()
   return (
      <div className="dashboard">
         <img src="intro.jpeg" alt="mall" className="img-fluid w-100 hh" />
         <div className="container mt-3">
            <div className="hero-wrap">
               <div className="board d-flex  justify-content-between align-items-center bg-white shadow p-4">
                  <div className="balance">
                     <span className="fs-3">₦500.00</span> <br />
                     <small>My Balance</small>
                  </div>
                  <div className="fund-wrap">
                     <Link to={"/recharge"}>
                        <span className="fs-4 btn-purple text-white px-4 py-3  rounded-circle">
                           $
                        </span>
                     </Link>
                  </div>
               </div>
               <div className="btn-wrap">
                  <btn className="btn w-100 rounded-pill text-white p-2 fs-5 text-uppercase mt-4 btn-purple">
                     <MdOutlineSwipeLeft /> Start Making Money
                  </btn>
               </div>

               {/* Btns Menu  */}
               <div className="round-btn d-flex text-purple justify-content-center gap-4 my-4">
                  <div className="wrap text-center">
                     <button onClick={() => navi("/recharge")}>
                        <FaDollarSign />
                     </button>{" "}
                     <br />
                     <small> Recharge </small>
                  </div>
                  <div className="wrap text-center">
                     <button onClick={() => navi("/withdrawal")}>
                        <FaCreditCard />
                     </button>{" "}
                     <br />
                     <small> Withdraw </small>
                  </div>
                  <div className="wrap text-center">
                     <button onClick={() => navi("")}>
                        <FaShare />
                     </button>{" "}
                     <br />
                     <small> Invite </small>
                  </div>
               </div>

               {/* Gain Section */}
               <div className="gain my-5">
                  <div className="head text-center mb-2">
                     <span className="fs-4">Gain</span>
                  </div>
                  <div className="body">
                     <div className="row px-3 gap-4">
                        <div className="col p-4 text-center rounded shadow bg-white">
                           <span className="fs-4">₦0</span> <br />
                           <small>Earnings today</small>
                        </div>
                        <div className="col p-4 text-center rounded shadow bg-white">
                           <span className="fs-4">₦0</span> <br />
                           <small>Earnings today</small>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Agency Revenue Display */}
               <div className="rev my-5">
                  <div className="header mt-5 pb-4">
                     <span className="fs-4">Agency Revenue Display </span>
                  </div>
                  {revArr.map((i, index) => (
                     <div
                        className="board bg-white shadow py-2 d-flex gap-4 mb-3"
                        key={index}
                     >
                        <div className="name col-lg-1 col-3 d-flex align-items-center px-3">
                           {i.name}
                        </div>
                        <div className="amount">
                           <span className="fw-bold">₦{i.amount}</span> <br />
                           <small>Earnings Today</small>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Partner Section */}
               <div className="partners mb-5">
                  <div className="row">
                     {partnersImg.map((i) => (
                        <div
                           className="col-lg-3 col-md-3 col-sm-3 col-6 p-3"
                           key={i}
                        >
                           <img src={i} alt={i} className="img-fluid rounded" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
