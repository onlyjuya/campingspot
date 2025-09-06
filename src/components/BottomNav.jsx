import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, ShoppingBag, Users, User } from "lucide-react";

function BottomNav() {
  const location = useLocation();
  const menus = [
    { label: "홈", path: "/", icon: <Home size={20} /> },
    { label: "예약", path: "/reserve", icon: <Calendar size={20} /> },
    // { label: "스토어", path: "/store", icon: <ShoppingBag size={20} /> },
    { label: "라문지", path: "/community", icon: <Users size={20} /> },
    { label: "마이", path: "/mypage", icon: <User size={20} /> },
  ];

  return (
    <nav className="h-16 flex justify-around items-center border-t bg-white fixed bottom-0 left-0 right-0 shadow-sm">
      {menus.map((m) => (
        <Link
          key={m.path}
          to={m.path}
          className={`flex flex-col items-center text-xs ${
            location.pathname === m.path ? "text-blue-600" : "text-gray-400"
          }`}
        >
          {m.icon}
          <span className="mt-1">{m.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default BottomNav;
