import React, { useState } from "react";
import axios from "axios";
import Menu from "./menu";
import Loader from "../loader";

function UpdateAccountForm() {
   // Initialize state variables to store form data
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(null);

   const [bankName, setBankName] = useState("");
   const [bankNumber, setBankNumber] = useState("");
   const [accountName, setAccountName] = useState("");

   // Function to handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const data = {
         bank_name: bankName,
         bank_number: bankNumber,
         account_name: accountName,
      };

      try {
         // Create an Axios PUT request to update the account
         const response = await axios.put(`${window.api}/update-account`, data);

         if (response.status === 200) {
            // Account updated successfully
            setSuccess("Account updated successfully.");
            // Optionally, reset the form fields
            setBankName("");
            setBankNumber("");
            setAccountName("");
         } else {
            // Handle error cases here
            console.error("Account update failed.");
         }
         setLoading(false);
      } catch (error) {
         setLoading(false);
         console.error("Error:", error);
      }
   };

   return (
      <div>
         <Menu />
         <Loader loading={loading} />
         <div className="container">
            <div className="row justify-content-center">
               <form onSubmit={handleSubmit} className="col-lg-6 mx-auto">
                  <h2 className="mt-4 mb-4">Update Account</h2>
                  {success && (
                     <div className="alert alert-success">{success}</div>
                  )}
                  <div className="mb-3">
                     <label htmlFor="bankName" className="form-label">
                        Bank Name:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="bankName"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="bankNumber" className="form-label">
                        Bank Number:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="bankNumber"
                        value={bankNumber}
                        onChange={(e) => setBankNumber(e.target.value)}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="accountName" className="form-label">
                        Account Name:
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="accountName"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        required
                     />
                  </div>
                  <button type="submit" className="btn btn-primary">
                     Update Account
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default UpdateAccountForm;
