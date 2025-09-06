import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20 overflow-x-hidden">
      {/* 할로윈 프로모션 배너 */}
      <div className="relative h-40 bg-gradient-to-r from-emerald-500 to-green-700 mx-4 mt-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://d3ifb4xbksj7jo.cloudfront.net/medium_Sample_Atype_3c062030a0.png" alt="할로윈 캠핑 프로모션" className="w-full h-full object-cover rounded-xl"
            />
            </div>
      </div>

      {/* 카테고리 섹션 */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-5 gap-3 mb-3">
          {[
            { name: "최저가 도전", icon: "💰", badge: "NEW" },
            { name: "소규모캠핑", icon: "🏕️" },
            { name: "타프존캠핑", icon: "⛺" },
            { name: "키즈캠핑", icon: "👶" },
            { name: "반려견동반", icon: "🐕" }
          ].map((category, index) => (
            <div key={index} className="text-center">
              <div className="relative w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-1">
                <span className="text-sm">{category.icon}</span>
                {category.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                    {category.badge}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-700 leading-tight">{category.name}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-5 gap-3">
          {[
            { name: "이지캠핑", icon: "🎯" },
            { name: "오토캠핑", icon: "🚐" },
            { name: "글램핑", icon: "🏕️" },
            { name: "카라반", icon: "🚍" },
            { name: "펜션", icon: "🏨" }
          ].map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-1">
                <span className="text-sm">{category.icon}</span>
              </div>
              <span className="text-xs text-gray-700 leading-tight">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 예약오픈 일정 섹션 */}
      <div className="px-4 py-3">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">📅</span>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">숙소 예약오픈 일정 한눈에 보기</h3>
              <p className="text-xs text-gray-500">오픈 일정이 궁금하신가요?</p>
            </div>
          </div>
        </div>
      </div>

      {/* 실시간 캠핑 로그 */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-bold text-gray-900">실시간 캠핑 로그</h2>
          <button className="text-blue-600 text-sm font-medium">전체보기</button>
        </div>
        <div className="space-y-2">
          {[
            { text: "문경 STX오토캠핑장에서 즐거운 시간 보내고 있어요!", time: "17분 전", location: "문경 STX오토캠핑장" },
            { text: "가족과 함께하는 캠핑이 최고예요!", time: "1시간 전", location: "가평 자연캠핑장" },
            { text: "야경이 정말 아름다운 곳이에요", time: "2시간 전", location: "강릉 바다캠핑장" }
          ].map((log, index) => (
            <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-xs text-gray-900 mb-1">{log.text}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{log.time}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span>⛺</span>
                      {log.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 숙소 기획전 */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-bold text-gray-900">숙소 기획전</h2>
          <button className="text-blue-600 text-sm font-medium">전체보기</button>
        </div>
        
        {/* 필터 버튼들 */}
        <div className="flex gap-2 mb-3 overflow-x-auto">
          <button className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs whitespace-nowrap">신규 입점</button>
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs whitespace-nowrap">지금 가기 좋은</button>
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs flex items-center gap-1 whitespace-nowrap">
            🎃 얼리할로윈
          </button>
          <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs whitespace-nowrap">나만 알고 싶은</button>
        </div>
        
        <p className="text-xs text-gray-500 mb-3">✨ 입점과 동시에 사랑 받는 플레이스 ✨</p>
        
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "안면도마린오토캠핑장", price: "45,000원 부터", location: "충남 태안군" },
            { name: "강릉바다캠핑장", price: "55,000원 부터", location: "강원 강릉시" },
            { name: "가평자연캠핑장", price: "40,000원 부터", location: "경기 가평군" }
          ].map((spot, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-20 bg-gray-200"></div>
              <div className="p-2">
                <h3 className="font-semibold text-xs text-gray-900 mb-1">{spot.name}</h3>
                <p className="text-xs font-bold text-gray-900 mb-1">{spot.price}</p>
                <p className="text-xs text-gray-500">{spot.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인기 급상승 캠핑장 */}
        <div className="px-4 py-3">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <span>🔥</span> 인기 급상승 캠핑장
                </h2>
                <button className="text-blue-600 text-sm font-medium">전체보기</button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
                {[
                { id: 1, name: "더빌리지 안입취소", price: "35,000원~", location: "충북 진천군" },
                { id: 2, name: "알멕스랜드", price: "45,000원~", location: "경기 가평군", badges: ["🏆 2024 최다 예약 TOP 5", "🏆 2024 키즈캠핑 TOP 5"] },
                { id: 3, name: "호두마루캠핑", price: "50,000원~", location: "강원 평창군", badges: ["🌲 숲속 힐링 명소"] }
                ].map((spot) => (
                <Link 
                    key={spot.id} 
                    to={`/detail/${spot.id}`} 
                    className="block bg-white rounded-lg shadow-sm overflow-hidden hover:ring-2 hover:ring-blue-200"
                >
                    <div className="h-20 bg-gray-200"></div>
                    <div className="p-2">
                    <h3 className="font-semibold text-xs text-gray-900 mb-1">{spot.name}</h3>
                    <p className="text-xs font-bold text-gray-900 mb-1">{spot.price}</p>
                    <p className="text-xs text-gray-500 mb-1">{spot.location}</p>
                    {spot.badges && (
                        <div className="space-y-1">
                        {spot.badges.map((badge, badgeIndex) => (
                            <p key={badgeIndex} className="text-xs text-blue-600">{badge}</p>
                        ))}
                        </div>
                    )}
                    </div>
                </Link>
                ))}
            </div>
        </div>


      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default Home;
  