import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavButtonProps = {
  text: string;
  icon?: ReactNode;
  path: string;
};

export function NavButton({ text, icon, path }: NavButtonProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-200 ${
          isActive ? "text-blue-500 font-semibold" : "text-gray-400"
        }`
      }
    >
      {icon && <div className="pb-1">{icon}</div>}
      <span>{text}</span>
    </NavLink>
  );
}
