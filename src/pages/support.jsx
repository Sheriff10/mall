import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import Footer from "./footer";

export default function Support() {
   return (
      <div className="support recharge">
         <div className="header text-center p-5 text-light">
            Exclusive Customer Service
         </div>

         <div className="box">
            <div className="col-lg-3 shadow p-1 m-4 rounded ">
               <div className="round-btn d-flex text-purple justify-content-center gap-4 my-4">
                  <div className="wrap text-center">
                     <button>
                        <BsFillChatLeftFill />
                     </button>{" "}
                     <br />
                     <small className="text-black"> 08:00-21:00 </small>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
