import React from "react";
import { MdSupportAgent } from "react-icons/md";
import Footer from "./footer";

export default function Order() {
   const menu = ["All", "Pending", "Completed", "Freezing"];
   return (
      <div className="order">
         <div className="container">
            <div className="header d-flex justify-content-end p-3 fs-5">
               <MdSupportAgent />
            </div>
            <div className="order-menu uppercase d-flex gap-3 overflow">
               {menu.map((i) => (
                  <span key={i} className="btn btn-sm text-purple">{i}</span>
               ))}
            </div>
         </div>
         <Footer />
      </div>
   );
}
