// src/components/DateRangePicker.jsx
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { ko } from "date-fns/locale";
import { addMonths } from "date-fns";         // ← 이미 추가되어 있어야 합니다
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = ({ onSave }) => {
  const [range, setRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  const nights =
    (range[0].endDate - range[0].startDate) / (1000 * 60 * 60 * 24) || 0;

  return (
    <div className="flex flex-col h-[70vh]">
      {/* 상단 요약 */}
      <div className="p-4 border-b">
        <p className="text-sm text-gray-500">선택한 기간</p>
        <p className="text-base font-semibold">
          {nights > 0 ? `${nights}박` : "날짜를 선택하세요"}
        </p>
        {nights > 0 && (
          <p className="text-sm text-gray-600">
            {range[0].startDate.toLocaleDateString("ko-KR")} ~{" "}
            {range[0].endDate.toLocaleDateString("ko-KR")}
          </p>
        )}
      </div>

      {/* 달력 (세로 스크롤) */}
      <div className="flex-1 overflow-y-auto">
        <DateRange
          editableDateInputs
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={3}
          direction="vertical"
          showDateDisplay={false}          // 상단 입력칸 숨김
          showMonthAndYearPickers={false}  // 드롭다운 숨김
          monthDisplayFormat="M월 yyyy"     // 각 달 타이틀 포맷
          minDate={new Date()}
          maxDate={addMonths(new Date(), 3)}
          locale={ko}
        />
      </div>

      {/* 하단 저장 */}
      <div className="p-4 border-t flex justify-end">
        <button
          onClick={() => onSave(range[0])}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
