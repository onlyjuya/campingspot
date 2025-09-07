import React, { useState } from "react";
import Modal from "../components/Modal";
import DateRangePicker from "../components/DateRangePicker";
import GuestSelectModal from "../components/GuestSelectModal";
import { Calendar, Users, Ruler, Square } from "lucide-react";
import { differenceInCalendarDays, format } from "date-fns";

const CampingZoneSelect = () => {
  const [isDateModalOpen, setDateModalOpen] = useState(false);
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);
  
  const [selectedRange, setSelectedRange] = useState(null); // {startDate, endDate}
  const [selectedGuests, setSelectedGuests] = useState(null); // number

  const zones = [
    {
      id: 1,
      name: "호두마루(애견동반 가능)",
      location: "사천 비토섬 입구의 오션뷰 캠핑장",
      price: "55,000원~ / 1박",
      image: "../images/zone1.png",
      minStay: "최소 1박 · 최대 6박",
      capacity: "성인 2인, 미성년 2인",
      size: "7 x 10m",
      floorType: "파쇄석",
    },
    {
      id: 2,
      name: "호두마루",
      location: "사천 비토섬 입구의 오션뷰 캠핑장",
      price: "55,000원~ / 1박",
      image: "../images/zone2.png",
      minStay: "최소 1박 · 최대 6박",
      capacity: "성인 2인, 미성년 2인",
      size: "7 x 10m",
      floorType: "파쇄석",
    },
    {
      id: 3,
      name: "호두마루(두가족, 애견가능)",
      location: "사천 비토섬 입구의 오션뷰 캠핑장",
      price: "90,000원~ / 1박",
      image: "../images/zone3.png",
      minStay: "최소 1박 · 최대 6박",
      capacity: "성인 4인, 미성년 4인",
      size: "7 x 10m",
      floorType: "데크",
    },
  ];

  // 버튼 라벨: 날짜/박 (예: 09.18 - 09.20 / 2박), 없으면 기본 라벨
  const dateLabel = (() => {
    if (!selectedRange) return "일정 선택하기";
    const nights = Math.max(
      0,
      differenceInCalendarDays(selectedRange.endDate, selectedRange.startDate)
    );
    const s = format(selectedRange.startDate, "MM.dd");
    const e = format(selectedRange.endDate, "MM.dd");
    return `${s} - ${e} / ${nights}박`;
  })();

  return (
    <div id="select" className="p-4 bg-white mt-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold mb-3">
          캠핑존 둘러보기 {zones.length}
        </h2>
        
        {/* 일정 선택 / 선택 후 라벨 보여주는 버튼 */}
        <button
          onClick={() => setDateModalOpen(true)}
          className="flex items-center gap-2 bg-emerald-500 text-sm text-white px-3 py-2 rounded-lg font-semibold"
        >
          <Calendar size={18} />
          {dateLabel}
        </button>
      </div>

      {/* 예약 가능 안내 */}
      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
        <div>
          <p className="text-green-600 font-medium">● 예약 가능</p>
          <p className="text-sm text-gray-600">11.03까지</p>
        </div>
      </div>

      {zones.map((zone) => (
        <div
          key={zone.id}
          className="bg-white border rounded-lg shadow-sm mb-4 overflow-hidden"
        >
          <div className="flex">
            <div className="flex-1 p-3">
              <img
                src={zone.image}
                alt={zone.name}
                className="w-32 h-24 object-cover rounded-md"
              />
            </div>
            <div className="flex-[2] p-3">
              <p className="text-xs text-gray-500">오토캠핑</p>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {zone.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{zone.location}</p>
              <p className="text-base font-bold text-gray-900">{zone.price}</p>
              <p className="text-xs text-gray-500">
                체크인 14:00 · 체크아웃 11:00
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t px-3 py-2 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {zone.minStay}
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} /> {zone.capacity}
            </div>
            <div className="flex items-center gap-1">
              <Ruler size={14} /> {zone.size}
            </div>
            <div className="flex items-center gap-1">
              <Square size={14} /> {zone.floorType}
            </div>
          </div>
        </div>
      ))}

      {/* 일정 모달 */}
      <Modal
        isOpen={isDateModalOpen}
        onClose={() => setDateModalOpen(false)}
        zIndex={50}
      >
        <DateRangePicker
          buttonText="다음"
          onSave={(range) => {
            setSelectedRange(range);            // 3. 일정 선택 저장
            setGuestModalOpen(true);            // 4. 인원 모달 오픈
          }}
        />
      </Modal>

      {/* 인원 모달 */}
     <Modal
        isOpen={isGuestModalOpen}
        onClose={() => setGuestModalOpen(false)}
        zIndex={60}
      >
        <GuestSelectModal
          onSave={(totalGuests) => {
            setSelectedGuests(totalGuests);     // 5. 인원 저장
            setGuestModalOpen(false);
            setDateModalOpen(false);            // 6. 두 모달 모두 닫기
          }}
        />
      </Modal>
    </div>
  );
};

export default CampingZoneSelect;
