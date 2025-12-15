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
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-6 px-6 py-3 rounded-2xl border border-line bg-background/95 backdrop-blur shadow-lg">
        {tabs.map(({ label, path, icon: Icon }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-[11px] transition ${
                  isActive
                    ? "text-main"
                    : "text-muted hover:text-main"
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