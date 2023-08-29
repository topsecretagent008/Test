import "../App.css";
import React from "react";
import { SiThumbtack, SiBitcoinsv } from "react-icons/si";
import { AiOutlineDown } from "react-icons/ai";
import { LiaExchangeAltSolid } from "react-icons/lia";
import Header from "./layout/index";

export default function Home() {

  return (
    <div className="flex flex-col items-center h-full min-h-screen">
      <div className="w-full mx-auto  bg-[#181d28] h-full min-h-screen flex flex-col">
        <Header />
        <div className="w-2/3 mx-auto py-14 flex flex-col justify-center gap-5">
          <h4 className="text-white font-extrabold text-2xl text-center">
            Fast, Quick, Simple Exchanges
          </h4>
          <span className="text-white font-semibold text-center">
            Free from sign-up, limits, complications
          </span>
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-full h-[60px] justify-between items-center">
              <div className="py-4 w-full text-white bg-[#374155] rounded-tl-full font-bold text-xl">
                Crypto Exchange
              </div>
              <div className="w-[150px] h-[60px] overflow-hidden relative">
                <div className="w-[90px] h-[90px] rotate-45 bg-[#374155] absolute top-4 -left-11"></div>
                <div className="w-[90px] h-[90px] rotate-45 bg-[#2a3243] absolute -top-12 -right-11"></div>

              </div>
              <div className="py-4 w-full text-white bg-[#2a3243] rounded-tr-full font-bold text-xl">
                Buy/Sell Crypto
              </div>
            </div>
            <div className="w-full flex flex-col px-10 py-10 gap-8 bg-[#374155] rounded-b-[35px] text-center">
              <div className="flex w-full items-center gap-[2px]">
                <div className="justify-between flex w-3/4 px-4 py-2 items-center bg-[#131923] rounded-l-xl">
                  <div className="text-sm text-[#999a9b] font-bold">
                    You send
                  </div>
                  <div className="text-xl text-white font-bold">
                    200
                  </div>
                </div>
                <div className="p-2 w-1/4 items-center justify-between flex bg-[#131923] rounded-r-xl">
                  <div className="flex gap-1 items-center">
                    <SiThumbtack style={{ color: "#55a081" }} />
                    <span className="text-white text-xl font-bold">
                      USDT
                    </span>
                  </div>
                  <AiOutlineDown style={{ color: "white" }} />
                </div>
              </div>
              <div className="text-white text-2xl mx-auto">
                <LiaExchangeAltSolid />
              </div>
              <div className="flex w-full items-center gap-[2px]">
                <div className="justify-between flex w-3/4 px-4 py-2 items-center bg-[#131923] rounded-l-xl">
                  <span className="text-sm text-[#999a9b] font-bold">
                    You get
                  </span>
                  <span className="text-xl text-white font-bold">
                    = 0.00729057
                  </span>
                </div>
                <div className="p-2 w-1/4 items-center justify-between flex bg-[#131923] rounded-r-xl">
                  <div className="flex gap-1 items-center">
                    <SiBitcoinsv style={{ color: "#eeb578" }} />
                    <span className="text-white text-xl font-bold">
                      BTC
                    </span>
                  </div>
                  <AiOutlineDown style={{ color: "white" }} />
                </div>
              </div>
              <div className="w-full text-center mt-3 py-5 bg-[#315fb9] text-white font-bold rounded-xl">
                Exchange
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
