import React from 'react';
import Button from '../components/Button';

const History = () => {
  const reservations = [
    {
      id: 1,
      campingSpot: "강원도 평창 캠핑장",
      checkIn: "2024.02.15",
      checkOut: "2024.02.17",
      status: "완료",
      amount: "100,000원",
      rating: 5
    },
    {
      id: 2,
      campingSpot: "제주도 서귀포 캠핑장",
      checkIn: "2024.03.10",
      checkOut: "2024.03.12",
      status: "예약중",
      amount: "160,000원",
      rating: null
    },
    {
      id: 3,
      campingSpot: "경기도 가평 캠핑장",
      checkIn: "2024.01.20",
      checkOut: "2024.01.22",
      status: "완료",
      amount: "90,000원",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">예약 내역</h1>
          <p className="text-gray-600">총 {reservations.length}건의 예약 내역</p>
        </div>

        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {reservation.campingSpot}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {reservation.checkIn} ~ {reservation.checkOut}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      reservation.status === '완료' 
                        ? 'bg-green-100 text-green-800' 
                        : reservation.status === '예약중'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {reservation.status}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {reservation.amount}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    상세보기
                  </Button>
                  {reservation.status === '예약중' && (
                    <Button variant="danger" size="sm">
                      취소
                    </Button>
                  )}
                </div>
              </div>
              
              {reservation.status === '완료' && (
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">평점:</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < reservation.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      리뷰 작성
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
