import React, { useState } from "react";

const GuestSelectModal = ({ onSave }) => {
  const [adults, setAdults] = useState(2);
  const [teens, setTeens] = useState(0);
  const [kids, setKids] = useState(0);

  const totalGuests = adults + teens + kids;

  return (
    <div className="flex flex-col h-[70vh]">
      {/* 상단 */}
      <div className="p-4 border-b flex justify-center items-center font-semibold text-lg">
        인원 선택
      </div>

      {/* 본문 */}
      <div className="flex-1 overflow-y-auto divide-y">
        {/* 성인 */}
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-700">성인</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAdults(Math.max(0, adults - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              -
            </button>
            <span>{adults}</span>
            <button
              onClick={() => setAdults(adults + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* 청소년 */}
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-700">청소년</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTeens(Math.max(0, teens - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              -
            </button>
            <span>{teens}</span>
            <button
              onClick={() => setTeens(teens + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* 미취학 아동 */}
        <div className="flex justify-between items-center p-4">
          <span className="text-gray-700">미취학 아동</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setKids(Math.max(0, kids - 1))}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              -
            </button>
            <span>{kids}</span>
            <button
              onClick={() => setKids(kids + 1)}
              className="w-8 h-8 rounded-full border flex items-center justify-center text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 하단 저장 버튼 */}
      <div className="p-4 border-t">
        <button
          onClick={() => onSave(totalGuests)}
          className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold"
        >
          {totalGuests}명 선택완료
        </button>
      </div>
    </div>
  );
};

export default GuestSelectModal;
