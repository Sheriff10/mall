import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";

export default function Nodata({ title }) {
   return (
      <div className="no-data recharge">
         <div className="header d-flex justify-content-between align-items-center p-3 text-light text-uppercase">
            <FaArrowLeft /> <span>{title} records</span> <MdNotifications />
         </div>

         <div className="container">
            <div className="text-wrap mt-4">
               <span className="fs-5">Cummulative {title}: #0</span>
            </div>

            <div className="text-wrap text-center">
               <span className="text-muted">No Data</span>
            </div>
         </div>
      </div>
   );
}
