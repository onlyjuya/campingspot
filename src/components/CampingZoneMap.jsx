import React from "react";

const CampingZoneMap = () => {
  return (
    <div id="map" className="p-4 bg-white mt-2">
      <h2 className="text-base font-semibold mb-3">캠핑존 배치도</h2>
      <div className="rounded-lg overflow-hidden border">
        <img
          src="/images/camping-map.png" // 👉 public 폴더에 camping-map.png 저장
          alt="캠핑존 배치도"
          className="w-full object-contain"
        />
      </div>
      <p className="mt-2 text-xs text-gray-500 text-center">
        지도를 터치하여 크게 볼 수 있습니다.
      </p>
    </div>
  );
};

export default CampingZoneMap;
