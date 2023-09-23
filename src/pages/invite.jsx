import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { MdLink, MdMonetizationOn } from "react-icons/md";
import Footer from "./footer";

export default function Invite() {
   const inviteCode = localStorage.getItem('Invite-code')
   return (
      <div className="support recharge">
         <div className="header text-center p-5 text-light">
            invite friends to get commission
         </div>

         <div className="box">
            <div className="col-lg-3 shadow p-1 m-4 rounded ">
               <div className="round-btn d-flex text-purple justify-content-center gap-4 my-4">
                  <div className="wrap text-center">
                     <button>
                        <MdMonetizationOn />
                     </button>{" "}
                     <br />
                     <p>
                        Join my team for 30 minutes every day. Earning 100,000 a
                        month is just the beginning! Every invitation is a seed
                        of opportunity, a springboard for wealth and freedom!
                        Come and get rich with your friends!
                     </p>
                     <p className="text-black ">
                        extension code:{" "}
                        <span className="text-purple ">{inviteCode}</span>
                     </p>
                     <button className="btn btn-purple btn-sm rounded">
                        {" "}
                        <MdLink /> COPY INVITATION LINK
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
