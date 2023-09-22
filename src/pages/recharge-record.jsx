import axios from "axios";
import React, { useEffect, useState } from "react";
import Nodata from "./nodata";

export default function RechargeRecord() {
   const [records, setRecords] = useState([]);

   useEffect(() => {
      getRecords();
   }, []);
   const getRecords = async () => {
      try {
         const phone = window.sessionStorage.getItem("phone");
         const response = await axios.post(`${window.api}/recharge-history`, {
            phone,
         });
         setRecords(response.data);
         console.log(response)
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="rr">
         <Nodata title={"recharge"} />

         {records.map((rec, index) => (
            <div
               className="board d-flex justify-content-between align-items-center p-2 rounded bg-white border-bottom"
               key={index}
            >
               <div className="text-wrap">
                  <span>{rec.narration}</span> <br />
                  <span className="badge bg-primary "> pending approval</span>
               </div>
               <span className="text-success">{rec.amount}</span>
            </div>
         ))}
      </div>
   );
}
