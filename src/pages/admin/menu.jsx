import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Menu() {
   useEffect(() => {
      isAdmin();
   }, []);
   const navi = useNavigate();

   const isAdmin = () => {
      const phone = sessionStorage.getItem("phone");
      if (!phone) return window.location.href='/login';

      if (phone !== "08166746299") return window.location.href='/login';
   };
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
         <div className="container">
            <a className="navbar-brand text-white" href="#">
               Admin Panel
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ml-auto text-white">
                  <li className="nav-item">
                     <NavLink
                        to={"/admin"}
                        className="nav-link text-white"
                        href="#"
                     >
                        Recharges
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        to={"/add-balance"}
                        className="nav-link text-white"
                        href="#"
                     >
                        Add Balance
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink
                        to={"/update-account"}
                        className="nav-link text-white"
                        href="#"
                     >
                        Update Recharge Account
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
