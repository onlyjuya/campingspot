import React from "react";
import DateRangePicker from "./DateRangePicker";
import { Anchor, Waves, Fish, Dog, LifeBuoy, Disc, Bath } from "lucide-react";

const facilities = [
  { icon: <Fish size={28} />, label: "갯벌" },
  { icon: <Waves size={28} />, label: "바다" },
  { icon: <Anchor size={28} />, label: "낚시" },
  { icon: <Dog size={28} />, label: "반려견" },
  { icon: <LifeBuoy size={28} />, label: "수영장" },
  { icon: <Disc size={28} />, label: "트램펄린" },
  { icon: <Bath size={28} />, label: "개별화장실/샤워실" },
];

const FacilitiesSection = () => {
  return (
    <div id="facilities" className="p-4 bg-white mt-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-900">시설 및 레저</h2>
        <button className="text-sm text-emerald-600">전체보기</button>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        {facilities.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 text-gray-700">
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesSection;
