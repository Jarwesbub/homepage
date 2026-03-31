import { FaHome } from "react-icons/fa";
import { NavButton } from "./NavButton";

export function NavBar() {
  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Bio", path: "/bio" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="pt-5 px-5 pb-2 border-b-2 border-gray-400">
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
        <div className="mr-auto font-bold text-lg">
          Norja Diesel - Portfolio
        </div>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <NavButton
              key={item.label}
              text={item.label}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
