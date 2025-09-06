import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Phone, CreditCard, Bookmark, Share2 } from "lucide-react";
import ExpandableText from "../components/ExpandableText";
import FacilitiesSection from "../components/FacilitiesSection";
import CampingZoneMap from "../components/CampingZoneMap";
import CampingZoneSelect from "../components/CampingZoneSelect";

const CampingDetail = () => {
  const { id } = useParams(); // 캠핑장 ID (예: /camp/1)
  
  // 임시 데이터 (나중에 API 연동 가능)
  const camping = {
    name: "호두마루캠핑",
    type: "오토캠핑",
    location: "경남 사천시 서포면",
    phone: "010-9059-2715",
    point: "최대 340P 적립",
    image: "../images/@camping.jpg",
    desc: {
      intro: "전 구역 오션뷰, 개별 화장실 개수대 냉장고",
      place: "사천 비토섬 입구에 바닷가에 위치",
      nearby: "항공우주박물관, 아라마루아쿠아리움, 사천바다케이블카 등",
      mannerTime: "오후 11:00 ~ 오전 7:00",
    },
    notices: [
      { id: 1, title: "호두마루캠핑장 OPEN, 인원관련 안내 (3/7)", type: "공지" },
      { id: 2, title: "부탁 드립니다 (음식물 쓰레기 / 분리 배출)" },
      { id: 3, title: "예약 일정 관련 공지" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 상단 이미지 + 아이콘 */}
      <div className="relative">
        <img
          src={camping.image}
          alt={camping.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-3 text-white">
          <button>←</button>
        </div>
        <div className="absolute top-4 right-4 flex gap-3 text-white">
          <button><Bookmark /></button>
          <button><Share2 /></button>
        </div>
      </div>

      {/* 캠핑장 기본 정보 */}
      <div className="bg-white p-4 border-b">
        <h1 className="text-xl font-bold text-gray-900">{camping.name}</h1>
        <p className="text-sm text-gray-600">{camping.type}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
          <p className="flex items-center gap-1"><MapPin size={16} /> {camping.location}</p>
          <p className="flex items-center gap-1"><Phone size={16} /> {camping.phone}</p>
          <p className="flex items-center gap-1 text-emerald-600"><CreditCard size={16} /> {camping.point}</p>
        </div>
        <button className="mt-3 w-full py-2 bg-emerald-500 text-white rounded-lg font-medium">
          온라인 결제
        </button>
      </div>

      {/* 탭 메뉴 */}
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="flex overflow-x-auto text-sm font-medium text-gray-600 whitespace-nowrap scrollbar-hide">
            {[
                { label: "기본정보", id: "basic" },
                { label: "공지사항", id: "notice" },
                { label: "캠핑장 소개", id: "intro" },
                { label: "시설 및 레저", id: "facilities" },
                { label: "캠핑존 배치도", id: "map" },
                { label: "캠핑존 둘러보기", id: "select" },
                { label: "캠핑로그", id: "log" },
                { label: "운영정책", id: "policy" },
            ].map((tab) => (
                <button
                key={tab.id}
                onClick={() =>
                    document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex-none px-4 py-3 hover:text-emerald-600"
                >
                {tab.label}
                </button>
            ))}
        </div>
      </div>

      {/* 기본정보 */}
      <div id="basic" className="p-4 bg-white mt-2">
        <h2 className="text-base font-semibold mb-3">기본정보</h2>
        <dl className="text-sm space-y-2">
          <div className="flex justify-between"><dt className="text-gray-500">한줄소개</dt><dd>{camping.desc.intro}</dd></div>
          <div className="flex justify-between"><dt className="text-gray-500">위치소개</dt><dd>{camping.desc.place}</dd></div>
          <div className="flex justify-between"><dt className="text-gray-500">인근명소</dt><dd>{camping.desc.nearby}</dd></div>
          <div className="flex justify-between"><dt className="text-gray-500">매너타임</dt><dd>{camping.desc.mannerTime}</dd></div>
        </dl>
      </div>

      {/* 공지사항 */}
      <div id="notice" className="p-4 bg-white mt-2">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-semibold">공지사항</h2>
          <button className="text-sm text-emerald-600">더보기</button>
        </div>
        <ul className="space-y-2 text-sm">
          {camping.notices.map((n) => (
            <li key={n.id} className="border-b pb-2">
              {n.type && <span className="mr-2 text-xs px-2 py-0.5 bg-gray-100 rounded">{n.type}</span>}
              {n.title}
            </li>
          ))}
        </ul>
      </div>

      {/* 캠핑장 소개 */}
      <div id="intro" className="p-4 bg-white mt-2">
        <h2 className="text-base font-semibold mb-3">캠핑장 소개</h2>

        {/* 기본은 접혀있고 더보기 클릭 시 확장 */}
        <ExpandableText
          text={`전 구역 오션뷰, 개별 화장실 개수대 냉장고
            저녁 노을이 아름다운 사천 서포 바닷가에 위치하고 있으며,
            호두마루글램핑장과 접해 있는 소규모 캠핑장입니다.

            전 사이트가 횡 방향으로 1열로 배치되어 있어 모든 사이트가 호수 같이 평온한 느낌의 오션뷰를 즐길 수 있으며,
            캠핑장 앞 갯벌에서는 갯벌 체험이 가능하고, 선착장에서는 낚시도 가능합니다.

            각 사이트 별로 화장실(샤워실, 개수대 포함)이 설치되어 있으며, 개수대 옆에 냉장고를 비치하여 이용상의 편의성을 고려하였습니다.`}
        />
      </div>

      {/* 시설 및 레저 */}
      <FacilitiesSection />

      {/* 캠핑존 배치도 */}
      <CampingZoneMap />

      {/* 캠핑존 선택 */}
      <CampingZoneSelect />

    </div>
  );
};

export default CampingDetail;
