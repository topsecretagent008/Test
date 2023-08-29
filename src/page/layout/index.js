import "../../App.css";
import React from "react";
import { PiClipboardTextFill } from "react-icons/pi";

export default function Header() {

  return (
    <div className="w-full bg-[#151b29] flex px-10 py-4 border-b-2 border-b-[#131720] justify-between">
      <div className="text-white font-extrabold text-xl">
        Verified Swap
      </div>
      <div className="flex gap-2 items-center">
        <div className="text-md font-semibold text-[#b4b0b0]">
          Disconnect
        </div>
        <div className="flex items-center py-2 px-5 bg-[#374155] rounded-full gap-2">
          <PiClipboardTextFill style={{ color: "#b7f8a3" }} />
          <div className="text-sm text-white font-semibold">
            0x8e42...
          </div>
        </div>
      </div>
    </div>
  );
}
