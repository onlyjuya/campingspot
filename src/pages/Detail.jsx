function Detail() {
    return (
      <div className="p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded">이미지 캐러셀</div>
        <div>
          <h2 className="font-bold text-lg">OO 캠핑장</h2>
          <p className="text-sm text-gray-600">강원도 평창군</p>
        </div>
        <div className="p-3 bg-white rounded shadow">실시간 예약 현황 / 사이트 배치도</div>
        <div className="p-3 bg-white rounded shadow">리뷰 섹션</div>
        <button className="w-full h-12 bg-blue-500 text-white rounded">예약하기</button>
      </div>
    );
  }
  
  export default Detail;
  