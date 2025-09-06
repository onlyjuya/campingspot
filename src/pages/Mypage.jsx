import React from 'react';
import Button from '../components/Button';

const Mypage = () => {
  const user = {
    name: "김캠핑",
    email: "camping@example.com",
    phone: "010-1234-5678",
    joinDate: "2024.01.15",
    totalReservations: 5,
    favoriteSpots: 3
  };

  const recentReservations = [
    {
      id: 1,
      campingSpot: "강원도 평창 캠핑장",
      checkIn: "2024.02.15",
      checkOut: "2024.02.17",
      status: "완료",
      amount: "100,000원"
    },
    {
      id: 2,
      campingSpot: "제주도 서귀포 캠핑장",
      checkIn: "2024.03.10",
      checkOut: "2024.03.12",
      status: "예약중",
      amount: "160,000원"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* 프로필 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">가입일: {user.joinDate}</p>
            </div>
            <Button variant="secondary" size="sm">
              프로필 수정
            </Button>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-lg font-bold text-emerald-600 mb-1">{user.totalReservations}</div>
            <div className="text-xs text-gray-600">총 예약 횟수</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-lg font-bold text-emerald-600 mb-1">{user.favoriteSpots}</div>
            <div className="text-xs text-gray-600">즐겨찾기</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-lg font-bold text-emerald-600 mb-1">4.8</div>
            <div className="text-xs text-gray-600">평균 평점</div>
          </div>
        </div>

        {/* 최근 예약 내역 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-gray-900">최근 예약 내역</h2>
            <Button variant="secondary" size="sm">
              전체보기
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentReservations.map((reservation) => (
              <div key={reservation.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{reservation.campingSpot}</h3>
                    <p className="text-xs text-gray-600 mb-1">
                      {reservation.checkIn} ~ {reservation.checkOut}
                    </p>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        reservation.status === '완료' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {reservation.status}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">{reservation.amount}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm">
                      상세보기
                    </Button>
                    {reservation.status === '예약중' && (
                      <Button variant="danger" size="sm">
                        취소
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 메뉴 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-base font-semibold text-gray-900 mb-3">내 정보</h2>
          
          <div className="space-y-2">
            {[
              { label: "프로필 수정", icon: "👤" },
              { label: "즐겨찾기", icon: "⭐" },
              { label: "고객센터", icon: "📞" },
              { label: "설정", icon: "⚙️" }
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-sm">
                <div className="flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span className="font-medium text-gray-900">{item.label}</span>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
