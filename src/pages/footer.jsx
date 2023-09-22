import React, { useEffect } from "react";
import {
   MdHome,
   MdOutlineChat,
   MdOutlineSwipeLeft,
   MdPerson,
   MdPlaylistAddCheck,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
export default function Footer() {
   const navi = useNavigate();

   useEffect(() => {
      const phone = window.sessionStorage.getItem("phone");
      if (!phone) return navi("/login");
   }, []);
   return (
      <div className="footer position-fixed shadow">
         <div className="no-gutters">
            <div className="col-auto mx-auto">
               <div className="row no-gutters justify-content-center fs-2">
                  <div className="col-auto">
                     <NavLink
                        to={"/dashboard"}
                        className="btn btn-link-default p-0 m-0"
                     >
                        <MdHome />
                     </NavLink>
                  </div>
                  <div className="col-auto">
                     <NavLink
                        to={"/order"}
                        className="btn btn-link-default p-0 m-0 "
                     >
                        <MdPlaylistAddCheck />
                     </NavLink>
                  </div>
                  <div className="col-auto">
                     <NavLink
                        to={"/grab"}
                        className="btn btn-link-default p-0 m-0 "
                     >
                        <MdOutlineSwipeLeft />
                     </NavLink>
                  </div>
                  <div className="col-auto">
                     <NavLink
                        to={"/support"}
                        className="btn btn-link-default p-0 m-0 "
                     >
                        <MdOutlineChat />
                     </NavLink>
                  </div>
                  <div className="col-auto">
                     <NavLink
                        to={"/my"}
                        className="btn btn-link-default p-0 m-0 "
                     >
                        <MdPerson />
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
