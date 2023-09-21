import React from "react";
import { BsCashStack, BsPlusCircleFill, BsRecycle } from "react-icons/bs";
import { FaCaretRight, FaCreditCard, FaGlobe, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function My() {
   const menuFunc = (title, icon) => {
      return { title, icon };
   };
   const menuArr = [
      menuFunc("Withdraw", <FaCreditCard />),
      menuFunc("recharge record ", <BsPlusCircleFill />),
      menuFunc("Withdraw record", <BsCashStack />),
      menuFunc("Account details", <BsRecycle />),
      menuFunc("bind bank card", <FaCreditCard />),
      menuFunc("change password", <FaLock />),
      menuFunc("modify withdrawal password", <FaLock />),
      menuFunc("select language", <FaGlobe />),
   ];
   return (
      <div className="my">
         <div className="container">
            {/* Header Section */}
            <div className="header text-light mt-4 rounded">
               <div className="h-user d-flex align-items-center p-2 ">
                  <img
                     src="/head.png"
                     alt="User"
                     className="img-fluid me-5"
                     width={80}
                  />
                  <div className="wrap">
                     <span className="fs-4 fw-bold">8122448866</span>{" "}
                     <small className="text-mute">Free</small> <br />
                     <small>extension code</small>{" "}
                     <small>
                        {" "}
                        <b> LYCQK8</b>
                     </small>
                  </div>
               </div>

               {/* Card Section */}
               <div className="card">
                  <div className="board d-flex  justify-content-between align-items-center bg-white p-4">
                     <div className="balance">
                        <span className="fs-3">₦500.00</span> <br />
                        <small>My balance</small>
                     </div>
                     <div className="fund-wrap">
                        <Link to={"/recharge"}>
                           <span className="fs-4 btn-purple text-white px-4 py-3  rounded-circle">
                              +
                           </span>
                        </Link>
                     </div>
                  </div>
                  <hr className="border m-0" />
                  <div className="row text-center">
                     <div className="col-6 p-1 border-right">
                        <span className="span text-success">#500.00</span> <br />
                        <small>availaible balance</small>
                     </div>
                     <div className="col-6 p-1">
                        <span className="span text-danger">#0.00</span> <br />
                        <small>frozen amount</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container shadow py-3 my-4 rounded">
            {menuArr.map((i, index) => (
               <div className="d-flex men py-3 justify-content-between align-items-center text-purple" key={index}>
                  <div className="wrap d-flex align-items-center">
                     {" "}
                     <span className="menu">
                        {i.icon}{" "}
                     </span>{" "}
                     <span className="ms-4 fs-6 fw-bold">{i.title}</span>{" "}
                  </div>
                  <FaCaretRight className="fs-3" />
               </div>
            ))}
         </div>
         <Footer />
      </div>
   );
}
