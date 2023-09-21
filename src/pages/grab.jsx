import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function Grab() {
   return (
      <div className="grab">
         <div className="container">
            {/* Board */}
            <div className="board d-flex  justify-content-between align-items-center p-1 mt-4">
               <div className="balance">
                  <span className="fs-1">₦500.00</span> <br />
                  <small>My Balance</small>
               </div>
               <div className="fund-wrap">
                  <Link to={"/deposit"}>
                     <span className="fs-4 btn-purple text-white px-4 py-3  rounded-circle">
                        +
                     </span>
                  </Link>
               </div>
            </div>

            <div className="grab-body shadow rounded">
               {/* CARD section */}
               <div className="card text-light bg-template shadow mt-4 h-200 shadow-none">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-10">
                           <h1 className="fw-bold">Free</h1>
                        </div>
                        <div className="col-2 text-right">
                           <a data-toggle="modal" data-target="#vip_modal">
                              <FaBell />
                           </a>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <p>commission&nbsp;0% | 0&nbsp;order</p>
                        </div>
                     </div>
                     <div className="row text-center mt-4">
                        <div className="col-4">
                           <h1>0</h1>
                           <p>completed</p>
                        </div>
                        <div className="col-4">
                           <h1>0</h1>
                           <p>all</p>
                        </div>
                        <div className="col-4">
                           <h1>0</h1>
                           <p>incomplete</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* AMG Section */}
               <div className="amt-wrap pt-1 mb-5">
                  <div className="board px-3 d-flex justify-content-between">
                     <div className="b-wrap">
                        <span>₦0</span> <br />
                        <small>get a commission</small>
                     </div>
                     <div className="b-wrap">
                        <span>₦0</span> <br />
                        <small>get a commission</small>
                     </div>
                  </div>
                  <hr className="border" />
                  <div className="board px-3 d-flex justify-content-between">
                     <div className="b-wrap">
                        <span>0</span> <br />
                        <small>order quantity</small>
                     </div>
                     <div className="b-wrap">
                        <span>₦500</span> <br />
                        <small>available balance</small>
                     </div>
                  </div>
                  <hr className="border" />
                  <div className="btn-wrap p-3">
                     <button className="w-100 btn btn-purple text-light text-uppercase rounded-pill">
                        {" "}
                        Start Grabbing Orders
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
