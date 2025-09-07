import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Reserve from "./pages/Reserve";
import Mypage from "./pages/Mypage";
import CampingDetail from "./pages/CampingDetail";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <div className="w-full max-w-md sm:max-w-lg mx-auto bg-gray-50 min-h-screen flex flex-col relative">
        <Header />

        <ScrollToTop />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/detail/:id" element={<CampingDetail />} />
            <Route path="/store" element={<div className="p-4 text-center">스토어 페이지</div>} />
            <Route path="/community" element={<div className="p-4 text-center">라문지 페이지</div>} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
