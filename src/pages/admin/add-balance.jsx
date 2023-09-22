import axios from "axios";
import React, { useState } from "react";
import Loader from "../loader";
import Menu from "./menu";

function AddBalance() {
   // Initialize state for form fields
   const [phone, setUserNumber] = useState("");
   const [balance, setAmountToAdd] = useState("");
   const [success, setSuccess] = useState(null);
   const [loading, setLoading] = useState(false);

   // Function to handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         const data = { phone, balance };
         const response = await axios.post(`${window.api}/add-balance`, data);
         console.log(response);
         setSuccess("User balance updateda successfully");
         setLoading(false);
      } catch (error) {
         alert(`Error: User with number '${phone}' not found`);
         console.log(error);
         setLoading(false);
      }
   };

   return (
      <div>
         <Menu />
         <Loader loading={loading} />
         <div className="container">
            <div className="row justify-content-center">
               <form onSubmit={handleSubmit} className="col-lg-6">
                  <h4>Add User Balance</h4>

                  {success && (
                     <div className="alert alert-success">{success}</div>
                  )}
                  <div className="mb-3">
                     <label htmlFor="userNumber" className="form-label">
                        User Number:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="userNumber"
                        value={phone}
                        onChange={(e) => setUserNumber(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="amountToAdd" className="form-label">
                        Amount to be Added:
                     </label>
                     <input
                        type="number"
                        className="form-control"
                        id="amountToAdd"
                        value={balance}
                        onChange={(e) => setAmountToAdd(e.target.value)}
                        required
                     />
                  </div>
                  <button type="submit" className="btn btn-primary">
                     Add Balance
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default AddBalance;
