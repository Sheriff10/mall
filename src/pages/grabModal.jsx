import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GrabModal() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   const dum = [1, 2, 3, 4];

   const cardFunc = (vip, com, invest, color) => {
      return { vip, com, invest, color };
   };
   const cardArr = [
      cardFunc("Free", 0, 0.0, "#024f87"),
      cardFunc("VIP1", 0.56, 999.0, "#055d90"),
      cardFunc("VIP2", 0.48, 2999.0, "#cc8305"),
      cardFunc("VIP3", 0.44, 4999.0, "#1d05d0"),
      cardFunc("VIP4", 6, 10000.0, "#06e49a"),
      cardFunc("VIP5", 7, 88888.0, "#1d1d1d"),
   ];
   return (
      <div id="myModal" className="modal fade" role="dialog">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header"></div>
               <div className="modal-body text-center ">
                  <div className="wrap d-flex justify-content-end position-absolute end-0 me-3">
                     <span className="shadow py-1 px-2 rounded-circle fw-bold fs-4" data-dismiss="modal">X</span>
                  </div>{" "}
                  <br />
                  <span>Levels</span> <br /> <br />
                  <Swiper
                     slidesPerView={1}
                     onSlideChange={() => console.log("slide change")}
                     onSwiper={(swiper) => console.log(swiper)}
                  >
                     {cardArr.map((i, index) => (
                        <SwiperSlide key={i}>
                           <div
                              className="wrap"
                              style={{ padding: "0px 50px" }}
                           >
                              <div
                                 classNameName="levels p-4 rounded text-light btn-purple"
                                 style={{
                                    background: `${i.color}`,
                                    borderRadius: "10px",
                                    padding: "5px 10px ",
                                    color: "#fff",
                                    paddingBottom: "20px",
                                 }}
                              >
                                 <div className="head d-flex justify-content-between align-items-center py-3">
                                    <span className="fs-1 fw-bold">
                                       {i.vip}
                                    </span>
                                    <small>
                                       {index === 0
                                          ? "Current level"
                                          : "Join>>"}
                                    </small>
                                 </div>
                                 <div className="body text-center">
                                    <small>
                                       Required Investment #{i.invest}
                                    </small>{" "}
                                    <br />
                                    <small>commission {i.com}% | 0 order</small>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
               <div className="modal-footer"></div>
            </div>
         </div>
      </div>
   );
}
