// src/components/DateRangePicker.jsx
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { addMonths, format } from "date-fns";
import { ko } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = ({ onSave, buttonText = "저장" }) => {
  const [range, setRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  const nights =
    (range[0].endDate - range[0].startDate) / (1000 * 60 * 60 * 24) || 0;

  return (
    <div className="flex flex-col h-[70vh]">
      <div className="p-4 border-b">
        <p className="text-sm text-gray-500">선택한 기간</p>
        <p className="text-base font-semibold">
          {nights > 0 ? `${nights}박` : "날짜를 선택하세요"}
        </p>
        {nights > 0 && (
          <p className="text-sm text-gray-600">
            {format(range[0].startDate, "yyyy년 M월 dd일 (E)", { locale: ko })} ~{" "}
            {format(range[0].endDate, "yyyy년 M월 dd일 (E)", { locale: ko })}
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <DateRange
          editableDateInputs
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={3}
          direction="vertical"
          showDateDisplay={false}
          showMonthAndYearPickers={false}
          monthDisplayFormat="M월 yyyy"
          minDate={new Date()}
          maxDate={addMonths(new Date(), 3)}
          locale={ko}
          className="w-full"
        />
      </div>

      <div className="p-4 border-t">
        <button
          onClick={() => onSave(range[0])}
          className="w-full px-4 py-3 bg-emerald-500 text-white rounded-lg font-semibold"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DateRangePicker;
