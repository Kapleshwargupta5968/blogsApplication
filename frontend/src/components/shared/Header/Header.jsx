import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ClipboardList } from "lucide-react";
const Header = () => {
  const { user, logout } = useAuth();

  const publicLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "FAQ", path: "/faq" },
  ];

  const navLinkClass = ({ isActive }) =>
  `px-4 py-2 transition duration-200 ${
    isActive
      ? "text-[#2563EB] "
      : "hover:text-[#6D28D9]"
  }`;

  return (
    <header className="h-10 w-full flex justify-between items-center bg-[#f6eef2] text-[#6B7280] p-3 text-shadow-2xl shadow-2xs">
      <div className="flex justify-center items-center gap-1">
        <div><ClipboardList  className="w-5 h-5 text-primary hover:scale-110 transition-all"/></div>
        <div className="text-2xs text-[#111827]">My adda</div>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-10">

          {/* Public Links */}
          {publicLinks.map((item) => (
            <li key={item.id}>
              <NavLink className={navLinkClass} to={item.path}>{item.name}</NavLink>
            </li>
          ))}

          {/* Not Logged In */}
          {!user && (
            <>
              <li>
                <NavLink className={navLinkClass} to="/signin">Login</NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/signup">Register</NavLink>
              </li>
            </>
          )}

          {/* User Role */}
          {user?.role === "user" && (
            <>
              <li>
                <NavLink className={navLinkClass} to="/todos">My Todos</NavLink>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}

          {/* Admin Role */}
          {user?.role === "admin" && (
            <>
              <li>
                <NavLink className={navLinkClass} to="/admin/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/admin/users">Manage Users</NavLink>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default Header;