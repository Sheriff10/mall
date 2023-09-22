import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../loader";
import Menu from "./menu";

export default function Admin() {
   const [loading, setLoading] = useState(false);
   const [recharges, setRecharges] = useState([]);


   useEffect(() => {
      getRecharges();
   }, []);
   const getRecharges = async () => {
      setLoading(true);
      try {
         const response = await axios.get(`${window.api}/get-recharges`);
         console.log(response);
         if (response.data.length == 0) alert("No pending recharges");
         setLoading(false);
         setRecharges(response.data);
      } catch (error) {
         setLoading(false);

         console.log(error);
      }
   };

   const updateStatus = async (pending, rechargeId, balance, phone) => {
      try {
         setLoading(true);
         const data = { pending, rechargeId };
         const response = await axios.put(
            `${window.api}/update-transaction`,
            data
         );
         getRecharges();
         console.log(response);

         // if admin confirms transaction
         if (pending === "confirm") {
            setLoading(true);
            const data = { phone, balance };
            const response = await axios.post(
               `${window.api}/add-balance`,
               data
            );
            console.log(response);
            setLoading(false);
         }
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };
   return (
      <div className="admin">
         <Menu />
         <Loader loading={loading} />
         <div className="container">
            <div className="recharges">
               <div className="header">
                  <h4>Pending User Recharges</h4>
               </div>
               <div className="table-responsive">
                  <table className="table">
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Amount</th>
                           <th>Narration</th>
                           <th>Phone</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {/* Sample table row */}
                        {recharges.map((i, index) => (
                           <tr>
                              <td>
                                 {i.sender_name === ""
                                    ? "no name"
                                    : i.sender_name}
                              </td>
                              <td>#{i.amount}</td>
                              <td>{i.narration}</td>
                              <td>{i.phone}</td>
                              <td>
                                 <button
                                    className="btn btn-success"
                                    onClick={() =>
                                       updateStatus("confirm", i._id, i.amount, i.phone)
                                    }
                                 >
                                    Confirm
                                 </button>
                                 <button
                                    className="btn ms-2 btn-danger"
                                    onClick={() =>
                                       updateStatus("cancel", i._id, i.amount, i.phone)
                                    }
                                 >
                                    Cancel
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}
