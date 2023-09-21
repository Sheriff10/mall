import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { MdLink, MdMonetizationOn } from "react-icons/md";
import Footer from "./footer";

export default function Invite() {
   return (
      <div className="support recharge">
         <div className="header text-center p-5 text-light">
            invite friends to get commission
         </div>

         <div className="box">
            <div className="col-lg-3 shadow p-1 m-4 rounded ">
               <div className="round-btn d-flex text-purple justify-content-center gap-4 my-4">
                  <div className="wrap text-center">
                     <button>
                        <MdMonetizationOn />
                     </button>{" "}
                     <br />
                     <p>
                        Her gün yarım saatte bir ekibime katılın. Ayda 100.000
                        kazanmak sadece başlangıç! Her davet bir fırsat tohumu,
                        zenginlik ve özgürlük için bir sıçrama tahtasıdır! Gelin
                        ve arkadaşlarınızla birlikte zengin olun!
                     </p>

                     <p className="text-black ">extension code: <span className="text-purple ">LYHS8</span></p>

                     <button className="btn btn-purple btn-sm rounded"> <MdLink /> COPY INVITATION LINK</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
