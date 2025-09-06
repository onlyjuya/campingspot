import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

const Reserve = () => {
  const [guests, setGuests] = useState({ adult: 2, teen: 0, child: 0 });
  const [cars, setCars] = useState([{ id: 1, number: "", isRental: false }]);

  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const handleCarChange = (id, value) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id ? { ...car, number: value } : car
      )
    );
  };

  const handleRentalToggle = (id) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id ? { ...car, isRental: !car.isRental, number: "" } : car
      )
    );
  };

  const addCar = () => {
    setCars((prev) => [...prev, { id: prev.length + 1, number: "", isRental: false }]);
  };

  const removeCar = (id) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("예약 정보:", { guests, cars });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* 캠핑장 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
          <img
            src="https://via.placeholder.com/120x80?text=캠핑장"
            alt="캠핑장"
            className="w-32 h-20 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              천안서리실힐링가족캠핑
            </h3>
            <p className="text-sm text-gray-600">또랑건너사이트 · 또랑건너1번</p>
            <p className="text-xs text-gray-500 mt-1">기준인원 : 4명</p>
            <p className="text-xs text-gray-500">기준차량 : 1대</p>
          </div>
        </div>

        {/* 체크인/아웃 */}
        <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center text-center">
          <div>
            <p className="text-xs text-blue-600 font-medium">체크인</p>
            <p className="text-lg font-bold">09.26(금)</p>
            <p className="text-xs text-gray-500">오후 02:00</p>
          </div>
          <div className="text-sm font-semibold text-gray-800">2박</div>
          <div>
            <p className="text-xs text-blue-600 font-medium">체크아웃</p>
            <p className="text-lg font-bold">09.28(일)</p>
            <p className="text-xs text-gray-500">오전 11:00</p>
          </div>
        </div>

        {/* 인원 선택 */}
        <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold text-gray-900 mb-4">이용 인원</h2>
        {[
            { label: "성인", key: "adult" },
            { label: "청소년", key: "teen" },
            { label: "미취학아동", key: "child" },
        ].map(({ label, key }) => (
            <div key={key} className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-700">{label}</span>
            <div className="flex items-center gap-2">
                <button
                type="button"
                onClick={() => handleGuestChange(key, -1)}
                className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600"
                >
                -
                </button>
                <span className="w-6 text-center">{guests[key]}</span>
                <button
                type="button"
                onClick={() => handleGuestChange(key, 1)}
                className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600"
                >
                +
                </button>
            </div>
            </div>
        ))}

        {/* 추가된 인원 요약 박스 */}
        <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
            <div className="flex justify-between mb-2">
            <span>기준인원</span>
            <span className="font-medium">4명</span>
            </div>
            <div className="flex justify-between mb-2">
            <span>추가 가능 인원</span>
            <span className="font-medium">성인 2명, 미성년 2명</span>
            </div>
            <div className="flex justify-between">
            <span>총 인원 제한</span>
            <span className="font-medium">6명</span>
            </div>
        </div>

        {/* 안내 문구 */}
        <p className="text-xs text-gray-500 mt-4">
            * 잠시 방문하는 게스트도 인원 정보에 포함해야 합니다.
        </p>
        <p className="text-xs text-gray-500">
            * 예약 시 등록되지 않은 게스트는 입장이 제한될 수 있으니 주의 바랍니다.
        </p>
        </div>


        {/* 차량 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            전체 차량 정보
          </h2>
          {cars.map((car) => (
            <div
                key={car.id}
                className="border border-gray-200 rounded-lg p-3 mb-3 relative"
            >
                <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-gray-700">
                    차량 {car.id}{" "}
                    {car.id === 1 ? (
                    <span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                        기준 주차
                    </span>
                    ) : (
                    <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        추가 차량
                    </span>
                    )}
                </p>

                {/* 차량 2번 이상일 때만 삭제 버튼 노출 */}
                {car.id > 1 && (
                    <button
                    type="button"
                    onClick={() => removeCar(car.id)}
                    className="text-sm text-red-500 hover:underline"
                    >
                    삭제
                    </button>
                )}
                </div>

                {/* 렌트 차량 체크박스 */}
                <Checkbox
                    label="렌트 차량입니다"
                    checked={car.isRental}
                    onChange={() => handleRentalToggle(car.id)}
                    className="mb-2"
                />

                {/* 차량번호 입력칸 (렌트 아닐 때만 보이게) */}
                {!car.isRental && (
                <Input
                    placeholder="차량번호를 입력해주세요"
                    value={car.number}
                    onChange={(e) => handleCarChange(car.id, e.target.value)}
                />
                )}
            </div>
            ))}

          <button
            type="button"
            onClick={addCar}
            className="w-full py-2 border border-emerald-500 text-emerald-600 rounded-lg text-sm font-medium"
          >
            차량 정보 추가 +
          </button>
          <p className="text-xs text-red-500 mt-2">
            * 잠시 방문하는 게스트의 차량도 모두 등록해주세요.
          </p>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <Button type="submit" variant="primary" className="w-full">
          2박 3일 · 성인 {guests.adult}명 예약하기
        </Button>
      </div>
    </div>
  );
};

export default Reserve;
