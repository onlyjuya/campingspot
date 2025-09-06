function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 border-b bg-white">
        <h1 className="text-lg font-bold text-emerald-600">캠핑스팟</h1>
        <button className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100">
            예약조회
        </button>
    </header>

  );
}

export default Header;
  