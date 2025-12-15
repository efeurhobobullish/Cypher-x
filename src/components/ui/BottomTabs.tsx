import { NavLink } from "react-router-dom";
import { Home, Server, Rocket, Download } from "lucide-react";

const tabs = [
  { label: "Home", path: "/", icon: Home },
  { label: "Server", path: "/server", icon: Server },
  { label: "Deploy", path: "/deploy", icon: Rocket },
  { label: "Download", path: "/download", icon: Download },
];

export default function BottomTabs() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 border-t border-line bg-background/90 backdrop-blur z-50">
      <ul className="h-full flex justify-around items-center">
        {tabs.map(({ label, path, icon: Icon }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-[11px] transition ${
                  isActive ? "text-main" : "text-muted"
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}