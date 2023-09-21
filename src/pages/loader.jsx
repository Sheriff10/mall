import React from "react";
import { PulseLoader } from "react-spinners";

export default function Loader({ loading }) {
   return (
      <div
         className={`loader ${
            !loading && "d-none"
         } d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0 zi-5`}
      >
         <div className="wrap text-center ">
            <div className="mx-auto d-flex  justify-content-center">
               <PulseLoader color="#fff" size={10} />
            </div>
         </div>
      </div>
   );
}
