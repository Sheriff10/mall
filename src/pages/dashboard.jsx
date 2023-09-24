import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCreditCard, FaDollarSign, FaShare } from "react-icons/fa";
import rawData from "../random";

import Footer from "./footer";
import { MdOutlineSwipeLeft } from "react-icons/md";
import axios from "axios";

export default function Dashboard() {
   const [bal, setBal] = useState('')
   useEffect(() => {
      getBalance();
   }, []);
   const partnersImg = [
      "/amazon.png",
      "/walmart.png",
      "/snapdeal.png",
      "/shopify.png",
   ];

   const balance = window.sessionStorage.getItem("balance");

   const getBalance = async () => {
      const phone = window.sessionStorage.getItem("phone");
      try {
         const response = await axios.get(`${window.api}/get-balance/${phone}`);
         window.sessionStorage.setItem("balance", response.data.balance);
         window.sessionStorage.setItem("username", response.data.username);
         setBal(response.data.balance)
      } catch (error) {
         console.log(error);
      }
   };

   const modalRef = useRef(null);

   useEffect(() => {
      if (modalRef.current) {
         modalRef.current.click();
      }
   }, []);

   const navi = useNavigate();
   return (
      <div className="dashboard">
         <head>
            <title>Home</title>
         </head>
         <img src="intro.jpeg" alt="mall" className="img-fluid w-100 hh" />
         <div className="container mt-3">
            <div className="hero-wrap">
               <div className="board d-flex  justify-content-between align-items-center bg-white shadow p-4">
                  <div className="balance">
                     <span className="fs-3">₦{balance}.00</span> <br />
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
                  <btn
                     className="btn w-100 rounded-pill text-white p-2 fs-5 text-uppercase mt-4 btn-purple"
                     onClick={() => navi("/grab")}
                  >
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
                     <button onClick={() => navi("/invite")}>
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
                     <span className="fs-4">Agency Revenue Display</span>
                  </div>
                  <div className="position-relative board-container">
                     <div className=" slide-up-animation position-absolute w-100">
                        {rawData.map((i, index) => (
                           <div
                              className="board bg-white   shadow py-2 d-flex gap-4 mb-3"
                              key={index}
                           >
                              <div className="name col-lg-1 col-3 d-flex align-items-center px-3">
                                 {i.name}
                              </div>
                              <div className="amount">
                                 <span className="fw-bold">₦{i.amount}</span>{" "}
                                 <br />
                                 <small>Earnings Today</small>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Modal section */}
               <button
                  type="button"
                  class="d-none"
                  data-toggle="modal"
                  ref={modalRef}
                  data-target="#myModal"
               >
                  Open Modal
               </button>
               <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                     <div class="modal-content col-4">
                        <div class="modal-header">
                           {/* <h4 class="modal-title">Modal Header</h4> */}
                        </div>
                        <div class="modal-body">
                           <p>
                              Join my team, 10 minutes a day, earn
                              100,000-2,000,000₦ a month, this is just the
                              beginning, every start is a seed of opportunity, a
                              springboard to wealth and freedom, unlimited
                              sharing!
                           </p>
                        </div>
                        <div class="modal-footer">
                           <button
                              className="btn btn-purple w-100 rounded-pill  text-light mb-2"
                              // onClick={() => navi(`/payment?amount=${amount}`)}
                              data-dismiss="modal"
                              onClick={() => console.log("clicked")}
                           >
                              ok
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Partner Section */}
               <div className="partners mb-5">
                  <div className="h">
                     <span className="fw-bold">PARTNERS</span>
                  </div>
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
