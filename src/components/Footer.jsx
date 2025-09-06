function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-6 px-4">
        <div className="max-w-md mx-auto">
          {/* 로고 */}
          <div className="text-center mb-4">
            <h3 className="text-base font-semibold text-gray-500">캠핑스팟</h3>
          </div>
  
          {/* 링크 목록 */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">서비스 이용 약관</a>
            <a href="#" className="hover:text-gray-700">개인정보 처리 방침</a>
            <a href="#" className="hover:text-gray-700">숙소 제휴 신청</a>
            <a href="#" className="hover:text-gray-700">광고 제휴 문의</a>
            <a href="#" className="hover:text-gray-700">스토어 입점 신청</a>
          </div>
  
          {/* 고객센터 */}
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-500 text-sm">📞</span>
              <span className="text-sm font-semibold text-gray-700">고객센터</span>
            </div>
            <div className="text-xs text-gray-500 space-y-0.5">
              <p>평일 10:00-18:00</p>
              <p>점심시간 13:00-14:00</p>
              <p className="text-gray-400">*주말, 공휴일 휴무</p>
            </div>
          </div>
  
          {/* FAQ & 소셜 */}
          <div className="flex items-center justify-between mb-3">
            <button className="text-xs text-gray-500 hover:text-gray-700">
              자주 묻는 질문
            </button>
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-gray-600 text-base">🍎</button>
              <button className="text-gray-400 hover:text-gray-600 text-base">📺</button>
              <button className="text-gray-400 hover:text-gray-600 text-base">📷</button>
            </div>
          </div>
  
          {/* 회사 정보 */}
          <div className="text-center">
            <button className="text-xs text-gray-400 hover:text-gray-600 mb-1">
              (주)넥스트에디션 사업자정보
            </button>
            <p className="text-xs text-gray-400 leading-relaxed">
              사업자등록번호: 123-45-67890 | 대표: 홍길동<br />
              주소: 서울특별시 강남구 테헤란로 123<br />
              통신판매업신고: 2024-서울강남-1234
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  