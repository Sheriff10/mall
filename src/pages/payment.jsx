import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Payment() {
   const [bankName, setBankName] = useState("Kuda Name"); // Replace with actual bank name
   const [bankAccount, setBankAccount] = useState("12345"); // Replace with actual bank account
   const [accountName, setAccountName] = useState("Kudi Venturez"); // Replace with actual account name
   const [transactionId, setTransactionId] = useState("");
   const [amount, setAmount] = useState(0);
   const [sender_name, setSender_name] = useState("");

   const generateTransactionId = () => {
      // Generate a random transaction ID (You can replace this with your own logic)
      const randomId = Math.random().toString(36).substring(7);
      setTransactionId(randomId);
   };
   useEffect(() => {
      getAmount();
   }, []);

   const navi = useNavigate();
   const getAmount = () => {
      const url = window.location.href;
      const urlParams = new URLSearchParams(url.split("?")[1]); // Split the URL and get the query parameters
      const url_amount = urlParams.get("amount"); // Get the value of the 'amount' parameter
      if (url_amount == "") return navi("/recharge");

      setAmount(url_amount);
   };

   const submit = async () => {
      if (amount == "") return navi("/recharge");

      try {
         const phone = window.sessionStorage.getItem("phone");

         const data = { narration: transactionId, amount, sender_name, phone };
         const response = await axios.post(`${window.api}/recharge`, data);
         console.log(response);
         alert("Transaction Proccessing");
         navi("/recharge-record");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="container p-4">
         <h2>Make a Recharge</h2>

         <div className="text-wrap alert alert-info mt-4">
            <small className="text-info">
               Send <b className="fs-4">#{amount}</b> to the acount below
            </small>
         </div>

         <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Bank Name */}
            <Form.Group className="flex-grow-1 mr-2 mb-0">
               <Form.Label>Bank Name:</Form.Label>
               <Form.Control type="text" value={bankName} readOnly />
            </Form.Group>
            <Button
               variant="primary"
               className="mt-4"
               size="sm"
               onClick={() => navigator.clipboard.writeText(bankName)}
            >
               Copy
            </Button>
         </div>

         <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Bank Account */}
            <Form.Group className="flex-grow-1 mr-2 mb-0">
               <Form.Label>Bank Account:</Form.Label>
               <Form.Control type="text" value={bankAccount} readOnly />
            </Form.Group>
            <Button
               variant="primary"
               className="mt-4"
               size="sm"
               onClick={() => navigator.clipboard.writeText(bankAccount)}
            >
               Copy
            </Button>
         </div>

         <div className="d-flex justify-content-between align-items-center mb-3">
            {/* Account Name */}
            <Form.Group className="flex-grow-1 mr-2 mb-0">
               <Form.Label>Account Name:</Form.Label>
               <Form.Control type="text" value={accountName} readOnly />
            </Form.Group>
            <Button
               variant="primary"
               className="mt-4"
               size="sm"
               onClick={() => navigator.clipboard.writeText(accountName)}
            >
               Copy
            </Button>
         </div>

         <div className="mb-3">
            {/* Generate Transaction ID */}
            <Button variant="primary" size="sm" onClick={generateTransactionId}>
               Generate Transaction ID
            </Button>
         </div>

         {/* Transaction ID */}
         {transactionId && (
            <div className="d-flex justify-content-between align-items-center mb-3">
               <Form.Group className="flex-grow-1 mr-2 mb-0">
                  <Form.Label>Narraion:</Form.Label>
                  <Form.Control type="text" value={transactionId} readOnly />
               </Form.Group>
               <Button
                  variant="primary"
                  className="mt-4"
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(transactionId)}
               >
                  Copy
               </Button>
            </div>
         )}

         {/* Recipient Name Input */}
         <Form.Group>
            <Form.Label>Recipient Name:</Form.Label>
            <Form.Control
               type="text"
               placeholder="Enter recipient name"
               onChange={(e) => setSender_name(e.target.value)}
               value={sender_name}
            />
         </Form.Group>

         {transactionId == "" ? (
            <div className="text-wrap alert alert-info mt-4">
               <small className="text-info">
                  Please generate a narration id and use it as the transaction
                  narration{" "}
               </small>
            </div>
         ) : (
            ""
         )}

         {transactionId == "" ? (
            ""
         ) : (
            <button
               className="btn btn-purple w-100 rounded-pill p-2 btn-sm text-light mt-4"
               onClick={submit}
            >
               I've paid already
            </button>
         )}
      </div>
   );
}

export default Payment;